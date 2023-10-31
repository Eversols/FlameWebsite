import * as VoxImplant from "voximplant-websdk";
import { reloginVox } from "../utils";
import { voxService } from ".";

export default class CallService {
  static client = null;
  outgoingCall = null;
  incomingCall = null;
  isMicMuted = false;
  isVideoCall = false;
  localStream = null;
  remoteStream = null;
  incomingCallListener = null;

  static getInstance() {
    if (!CallService.instance) {
      CallService.instance = new CallService();
    }
    return CallService.instance;
  }

  static instance;

  async init() {
    try {
      CallService.client = voxService.get();
      console.log("VoxImplant CallService initialized");
    } catch (error) {
      console.error("Error initializing CallService:", error);
      reloginVox();
    }
    this.addCallEventListeners();
  }

  addCallEventListeners() {
    console.log(VoxImplant.Events);
    CallService.client.on(VoxImplant.Events.IncomingCall, (e) => {
      this.handleIncomingCall(e.call);
      console.log("OOOOOOOOOOOOOOOO", e);
    });
    if(this.outgoingCall){
        this.setupCallEventListeners(this.outgoingCall)
    }
    if(this.incomingCall){
        this.setupCallEventListeners(this.incomingCall)
    }
  }

  async makeAudioCall(username) {
    await this.makeCall(username, false);
  }

  async makeVideoCall(username) {
    await this.makeCall(username, true);
  }

  async makeCall(username, isVideo) {
    console.log("OOOOOOOO", CallService.client);
    try {
      this.isVideoCall = isVideo;
      const callSettings = { video: isVideo };
      this.outgoingCall = await CallService.client.call(username, callSettings);
      console.log(
        `Outgoing ${isVideo ? "video" : "audio"} call initiated to`,
        username
      );
      this.setupCallEventListeners(this.outgoingCall);
    } catch (error) {
      console.error(
        `Error making a ${isVideo ? "video" : "audio"} call:`,
        error
      );
    }
  }

  setupCallEventListeners(call) {
    call.on(VoxImplant.CallEvents.Connected, () => {
      console.log("Call connected");
      if (this.isVideoCall) {
        this.setupVideoTracks(call);
      }
    });

    call.on(VoxImplant.CallEvents.Disconnected, () => {
      console.log("Call disconnected");
      this.cleanupCall();
    });

    call.on(VoxImplant.CallEvents.Failed, (reason) => {
      console.error("Call failed:", reason);
      this.cleanupCall();
    });

    call.on(VoxImplant.CallEvents.MessageReceived, (message) => {
      console.log("Message received during the call:", message.text);
    });
  }

  setupVideoTracks(call) {
    const localVideoElement = document.getElementById("localVideo");
    const remoteVideoElement = document.getElementById("remoteVideo");
    console.log("IIIIIIIIIIIIIIIIII", call);
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        this.localStream = stream;
        localVideoElement.srcObject = stream;
        call.rtc.call.sendVideo(stream);
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });

    call.rtc.on(VoxImplant.RTCEvents.RemoteStreamAdded, (e) => {
      if (e.call && e.stream) {
        this.remoteStream = e.stream;
        remoteVideoElement.srcObject = e.stream;
      }
    });

    call.rtc.on(VoxImplant.RTCEvents.RemoteStreamRemoved, (e) => {
      if (e.call) {
        this.remoteStream = null;
        remoteVideoElement.srcObject = null;
      }
    });
  }

  answerCall() {
    if (this.incomingCall) {
      this.incomingCall.answer();
      console.log("Call answered");
      this.incomingCall = null;
    }
  }

  rejectCall() {
    if (this.incomingCall) {
      this.incomingCall.reject();
      console.log("Call rejected");
      this.incomingCall = null;
    }
  }

  endCall() {
    if (this.outgoingCall) {
      this.outgoingCall.hangup();
      console.log("Outgoing call ended");
    }

    if (this.incomingCall) {
      this.incomingCall.hangup();
      console.log("Incoming call ended");
    }
  }

  toggleMic() {
    const call = this.outgoingCall || this.incomingCall;
    if (call) {
      if (this.isMicMuted) {
        call.unmuteMicrophone();
        console.log("Microphone unmuted");
      } else {
        call.muteMicrophone();
        console.log("Microphone muted");
      }
      this.isMicMuted = !this.isMicMuted;
    }
  }

  setIncomingCallListener(listener) {
    this.incomingCallListener = listener;
  }

  handleIncomingCall(call) {
    if (this.incomingCall) {
      // Already in a call, reject incoming call
      call.reject();
      console.log("Rejected incoming call");
    } else {
      // Accept incoming call
      this.incomingCall = call;

      console.log("Incoming call from", call.number());

      if (this.incomingCallListener) {
        this.setupCallEventListeners(call);
        this.incomingCallListener(call.number(), this.incomingCall);
      }
    }
  }

  cleanupCall() {
    if (this.localStream) {
      this.localStream.getTracks().forEach((track) => track.stop());
      this.localStream = null;
    }

    if (this.remoteStream) {
      this.remoteStream.getTracks().forEach((track) => track.stop());
      this.remoteStream = null;
    }

    this.outgoingCall = null;
    this.incomingCall = null;
    this.isVideoCall = false;
    this.incomingCallListener("", this.incomingCall);
  }

  dispose() {
    this.cleanupCall();
    this.incomingCallListener = null;
    CallService.instance = null;
  }
}
