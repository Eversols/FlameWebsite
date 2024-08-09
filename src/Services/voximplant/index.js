import * as VoxImplant from 'voximplant-websdk';
import { reloginVox } from '../utils';
import { persistor } from "../store";

class VoxService {
  constructor() {
    // Create Voximplant Web SDK instance
    VoxService.inst = VoxImplant.getInstance();

    // Reconnect to the Voximplant cloud when disconnected
    VoxService.inst.on(VoxImplant.Events.ConnectionClosed, () => {
      console.log('Connection was closed');
      this.connectToVoxCloud();
    });

    // Init Voximplant
    VoxService.inst.init({
      showDebugInfo: true,
      experiments: {
        messagingV2: true,
      },
      // showDebugInfo: true
    })
      .then(() => {
        console.log('SDK initialized');
        // Connect to the Voximplant cloud
        this.connectToVoxCloud();
      })
      .catch(console.error);
  }

  get() {
    if (!VoxService.inst) {
      VoxService.inst = VoxImplant.getInstance();
    }
    return VoxService.inst;
  }

  /**
   * Sign in the Voximplant cloud
   * return Promise with new tokens
   * @param {Object} loginForm - Data from a newly filled login form
   * @param {string} accessToken - Previously saved token
   */
  onLogin(loginForm, accessToken) {
    console.log('WWWWWWWWWWWWWWWWWWWWW', loginForm, accessToken)
    if (!accessToken) {
      return VoxService.inst.login(loginForm.user, loginForm.password);
    } else {
      return VoxService.inst.loginWithToken(loginForm.user, accessToken);
    }
  }

  refreshTokens(password, refreshToken) {
    return VoxService.inst.tokenRefresh(password, refreshToken);
  }

  /**
   * Re-login with tokens if connection breaks
   */
  connectToVoxCloud() {
    VoxService.inst.connect(false)
      .then(() => {
        console.log('Connection was established successfully');
        // store.dispatch('auth/relogin');
        reloginVox();
      })
      .catch((error) => {
        persistor.purge();
        localStorage.removeItem("persist:root");
        // window.location.href = '/'
        console.error('Connection failed', error);
      });
  }

  /**
  * Log out from the Voximplant cloud
  */
  logout() {
    VoxService.inst.disconnect()
      .then(() => {
        console.log('Disconnected successfully');
        // Perform any additional cleanup or state reset if needed
        // For example, clear tokens, reset application state, etc.
      })
      .catch((error) => {
        console.error('Disconnection failed', error);
      });
  }

}

export const voxService = new VoxService();
