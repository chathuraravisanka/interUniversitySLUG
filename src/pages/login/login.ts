import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { AdminPage } from '../admin/admin';




@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	loginForm: FormGroup;
	loginError: string;
	email: any;

	constructor(
		private navCtrl: NavController,
		private auth: AuthService,
		fb: FormBuilder
	) {
		this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  }
  
  login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};

		this.email=data.email;
		console.log("email",this.email)


		if(this.email=="kalana.k2@gmail.com"){
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.push(AdminPage),
				error => this.loginError = error.message
			);
		}else{
			this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.push(TabsPage),
				error => this.loginError = error.message
			);
		}
	}

	signup(){
		this.navCtrl.push(SignupPage);
	}

	loginWithGoogle() {

		let data = this.loginForm.value;

		let credentials = {
			email: data.email,
			password: data.password
		};
		this.email=data.email;
		console.log("emails",credentials);

		if(this.email=="kalana.k2@gmail.com"){
		this.auth.signInWithGoogle()
		  .then(
			() => this.navCtrl.push(AdminPage),
			error => console.log(error.message)
		  );
		}else{
			this.auth.signInWithGoogle()
		  .then(
			() => this.navCtrl.push(TabsPage),
			error => console.log(error.message)
		  );
		}
	}

}