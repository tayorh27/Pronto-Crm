import { Component, OnInit, OnDestroy } from "@angular/core";
import { AppConfig } from "../../services/global.service";
import * as firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/database';
import swal from "sweetalert2";
import { OverlayService } from '../../overlay/overlay.module';
import { ProgressSpinnerComponent } from '../../progress-spinner/progress-spinner.module';
import { Statuses } from "src/app/model/status";
import { AdminUsersService } from "src/app/services/admin-users.service";
import { MailServerSettings } from "src/app/model/server-settings";

declare interface TableData {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-email-settings',
    templateUrl: './email-settings.component.html',
    styleUrls: ['./email-settings.component.css']
})

export class EmailSettingsComponent implements OnInit, OnDestroy {

    
    button_pressed = false

    service = new AdminUsersService();
    config = new AppConfig();

    incoming_server = ""
    incoming_port = ""
    incoming_username = ""
    incoming_password = ""

    outgoing_server = ""
    outgoing_port = ""
    outgoing_username = ""
    outgoing_password = ""

    constructor(private previewProgressSpinner: OverlayService) {
    }


    ngOnDestroy() {

    }

    async getMailServerSettings() {
        const query = await firebase.firestore().collection("settings").doc("mail-server").get()
        if(!query.exists) {
            return
        }

        const ms = <MailServerSettings>query.data()

        this.incoming_server = ms.incoming_server
        this.incoming_port = ms.incoming_port
        this.incoming_username = ms.incoming_username
        this.incoming_password = ms.incoming_password

        this.outgoing_server = ms.outgoing_server
        this.outgoing_port = ms.outgoing_port
        this.outgoing_username = ms.outgoing_username
        this.outgoing_password = ms.outgoing_password
    }

    async saveMailServerSettings() {
        if(this.incoming_server === "" || this.incoming_port === "" || this.incoming_username === "" || this.incoming_password === "" ||
        this.outgoing_server === "" || this.outgoing_port === "" || this.outgoing_username === "" || this.outgoing_password === ""){
            this.config.displayMessage("All fields must be filled.", false)
            return
        }
        this.button_pressed = true
        const ms:MailServerSettings = {
            incoming_server: this.incoming_server,
            incoming_port: this.incoming_port,
            incoming_username: this.incoming_username,
            incoming_password: this.incoming_password,
            outgoing_server: this.outgoing_server,
            outgoing_port: this.outgoing_port,
            outgoing_username: this.outgoing_username,
            outgoing_password: this.outgoing_password,
        }

        await firebase.firestore().collection("settings").doc("mail-server").set(ms)
        this.config.displayMessage("Mail server settings saved.", true)

        this.button_pressed = false
    }


    ngOnInit() {
        const email = localStorage.getItem('email');
        this.getMailServerSettings()
    }
}