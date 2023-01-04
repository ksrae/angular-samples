import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router"

export class CustomRouteReuseStrategy extends RouteReuseStrategy {
    /**
   * 페이지를 빠져나갈 때 현재 컴포넌트 캐시 '여부'를 반환한다
   * false 반환 시 캐시 안해도 되는것으로 판단
   * true 반환 시 아래 store메서드를 호출한다
   */
  shouldDetach(route: ActivatedRouteSnapshot) {
    return false
  }
  /**
   * 페이지 빠져나가기 전 상태를 캐시한다
   * 캐시를 위해서 두 번째 인자인 DetachedRouteHandle을 어딘가에 저장하면 된다
   */
  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle) {}
  /**
   * 페이지 진입 시점에 복원 '여부'를 반환한다
   * false 반환 시 복원 안해도 되는것으로 판단
   * true 반환 시 아래 retrieve메서드를 호출한다
   */
  shouldAttach(route: ActivatedRouteSnapshot) {
    return false
  }
  /**
   * 페이지 진입 시 캐시된 데이터를 복원한다
   * 위에서 구현한 store 메서드 호출 시점에 어딘가에 저장했던 캐시를 반환하면 된다
   */
  retrieve(route: ActivatedRouteSnapshot) {
    return null
  }
  /**
   * 현재 이동에 컴포넌트 재사용 '여부'를 확인한다
   * false반환 시 재사용없이 컴포넌트를 새로 만들고
   * true를 반환하면 아래 4개의 메서드를 상황별로 호출하여 캐시 및 복원한다
   * (캐시, 복원 로직은 직접 구현해야 한다)
   */
  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ) {
    const [futureUrl, currUrl] = [future, curr].map(o =>
      o.url.map(seg => seg.path).join('/')
    )

    /**
     * Route비교 시 둘 다 'detail'을 포함한 path라면 컴포넌트를
     * 재사용하지 않도록 false를 반환한다.
     */
    if (futureUrl.includes('detail') && currUrl.includes('detail')) {
      return false
    }

    return future.routeConfig === curr.routeConfig
  }
}
