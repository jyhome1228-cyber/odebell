# ODEBELL — Renewal Preview

오드벨 브랜드 사이트 UI 리뉴얼을 위한 **정적 프런트엔드 미리보기**입니다. 카페24 운영몰과 분리되어 있습니다.

- 운영몰: https://odebell.com/
- 디자인 참고: https://barle.co.kr/
- 미리보기 예상 주소 (GitHub Pages 활성화 후): https://jyhome1228-cyber.github.io/odebell/
- 기술: HTML / CSS / Vanilla JavaScript / Pretendard Variable
- 기준 레이아웃: 최대 1440px, 태블릿/모바일 반응형
- 현재 상태: 1차 메인 UI, 제품 5종 구조, 헤더/푸터, 스크롤 모션 구축

## 구조
- `index.html` — 메인페이지 레이아웃
- `assets/css/style.css` — 공통 스타일 및 반응형
- `assets/js/main.js` — 임시 제품 데이터, 모바일 메뉴, 모션
- `docs/cafe24-integration.md` — 카페24 적용 체크리스트

## 주의사항
현재 제품 이미지는 **디자인 플레이스홀더**이며, 3~5번째 상품명도 임시 표기입니다. 기존 운영몰에서 확인된 두 상품 이름만 시안에 표기했습니다. 실제 가격, 구매 버튼, 주문·회원 연동 기능은 제공하지 않습니다. 브랜드 카피 역시 시안용입니다.

운영 사이트 반영 시 원본 카페24 스킨을 먼저 백업하고, 기존 상품번호/URL과 카페24 모듈을 유지하십시오.

## GitHub Pages 활성화
GitHub 저장소 → **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**. (설정 권한이 있는 계정으로 수행)
