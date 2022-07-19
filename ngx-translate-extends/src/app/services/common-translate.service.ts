import { Inject, Injectable } from "@angular/core";
import { MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateParser, TranslateService, TranslateStore } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class CommonTranslateService extends TranslateService {
  constructor(
    override store: TranslateStore,
    override currentLoader: TranslateLoader,
    override compiler: TranslateCompiler,
    override parser: TranslateParser,
    override missingTranslationHandler: MissingTranslationHandler,
  ) {
    super(store, currentLoader, compiler, parser, missingTranslationHandler, true, false, true, '');
  }
  // isolate 기능을 구현할 수 없으며 무조건 false로만 동작해야 함.

  // 문제는 isolate 기능을 활용할 때인데, isolate은 lazy-loading module간 서로 다른 언어 파일을 사용하는 기능이며, 이 기능은 translateModule의 forRoot와 forChild에서만 설정할 수 있습니다.
  // 위와 같이 TranslateService를 상속할 때 isolate은 private 이므로 super를 정의할 때 값을 넣을 수 있는데, 이 때 true를 주입하면 모든 페이지에서 인식하지 않으며, false를 넣으면 root 만 자신의 언어 파일을 인식하고, lazy-loading module에서는 자신의 언어 파일을 인식하지 않습니다. (lazy-loading module에서는 root와 동일한 언어 파일을 지정해도 인식하지 않습니다.)
}
