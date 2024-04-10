// Facebook FullStack Perú: https://www.facebook.com/groups/607163139705114/

import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  titulo: string;

  constructor(private readonly translate: TranslateService) {
    translate.addLangs(["es", "en", "fr"]);
    translate.setDefaultLang("es");

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/es|en/) ? browserLang : "es");
  }

  ngOnInit() {}

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
