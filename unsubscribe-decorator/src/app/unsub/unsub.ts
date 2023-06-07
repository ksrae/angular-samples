export function Unsub(obs$: any[] = []) {
  return function(constructor: any) {
      const orig = constructor.prototype.ngOnDestroy;
      constructor.prototype.ngOnDestroy = function() {
          for(const ob$ of obs$) {
              this[ob$].unsubscribe()
          }
          // orig.apply()
      }
  }
}

export function AutoUnsub(service: any) {
  return function unsubscribeAll(constructor: Function) {
    const onDestroy = constructor.prototype.ngOnDestroy ?? function () {};
    constructor.prototype.ngOnDestroy = function () {
      // component의 ngOnDestroy를 수행하기 위해서 필요함.
      // 여기에서 this는 이 함수를 호출한 component를 의미함.
      onDestroy.call(this);

      for (let i in this) {
        if(this[i]?.constructor?.name === service?.name) {
          this[i]?.destroy();
        }
        if(typeof this[i].unsubscribe !== 'undefined') {
            this[i].unsubscribe();
            console.log("unsubscribed!!");
        }
      }
    }
  }
}
