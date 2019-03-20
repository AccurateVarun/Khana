import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screenOrientation:ScreenOrientation
  ) {
    this.initializeApp();
  }

  initializeApp() {

    if(this.platform.is('cordova')){
      this.platform.ready().then(()=>{
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      })
    }
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      console.log(this.platform.is);
       //this.screenOrientation.lock('landscape');
    //     //ScreenOrientation.lockOrientation('landscape');
    //     //screen.msLockOrientation('landscape');
     //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);


    });

  }
}
