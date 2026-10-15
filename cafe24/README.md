# 오드벨 카페24 공통 레이아웃 이식 준비

## 원본 확보 범위
사용자가 제공한 것은 카페24 **레이아웃 파일 한 개**입니다. 실제 동작을 결정하는 `/weskin_import/header.html`, `/weskin_import/footer.html`, 기존 CSS 및 상세 상품 모듈 파일은 아직 받지 않았습니다.

## 생성된 파일
- `layout.html`: 스마트디자인 공통 레이아웃 기반 템플릿. 카페24 원본의 `<!--@contents-->`, 결제 진행 표시, 해외배송/모바일 전환, 기존 JS/CSS 및 헤더·푸터 import 보존.
- `odebell-renewal.css`: 카페24 공통 스타일 위에 덧입히는 최소한의 디자인 토큰 및 .ode-* 전용 레이아웃.
- `odebell-renewal.js`: jQuery를 추가 로드하지 않는 순수 JS 점진적 개선.
- GitHub Pages 프리뷰의 `index.html`과 `assets/css/style.css` 등을 **직접** 카페24 공통 레이아웃에 통째로 붙여 넣지 않음. 기존 카페24 CSS와 전역 선택자가 충돌할 수 있기 때문.

## 적용 절차
1. 카페24 스마트디자인에서 **현재 사용 중인 PC/모바일 스킨 복제 및 백업**.
2. `weskin_import/css/odebell-renewal.css`, `weskin_import/js/odebell-renewal.js` 업로드.
3. 복제 스킨 공통 레이아웃을 `layout.html` 내용으로 반영.
4. 다음으로 실제 `header.html`과 `footer.html` 소스를 확보하여, 기존 카페24 회원·장바구니·검색·카테고리 모듈을 유지한 채 ODEBELL 디자인을 적용.
5. 메인상품, 목록, 상세 옵션·장바구니·실제 판매가를 카페24 모듈로 이식.
6. PC/모바일 주문 테스트 및 결제 검증 후 운영 스킨에 적용.

### 주의
현재 파일은 **이식 준비용 코드**이며 카페24 스킨에 배포하지 않았습니다. 디자인 헤더·푸터는 원본 소스 확보 후 통합해야 합니다. 기존 헤더/푸터 import를 그대로 유지하는 이유는 실제 로그인·장바구니 및 게시판 기능 유실을 방지하기 위함입니다.
