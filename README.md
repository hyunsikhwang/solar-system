# ORBIT — 3D 태양계

실제 비율의 행성 공전 궤도와 행성·달·주요 소행성을 탐험하는 Three.js 웹사이트입니다.

[사이트 열기](https://solar-orbits-observatory.wonderful-writing.chatgpt.site)

## 기능

- 8개 행성의 공전, 속도 조절 및 일시정지
- 천체 선택과 추적 카메라, 궤도 및 트레일
- 지구의 표면·구름·대기·바다 반사·야간 조명
- 소행성대와 목성 트로이군, 주요 소행성
- 지구와 함께 이동하는 달과 지구 중심 공전
- 더블클릭 또는 버튼으로 설명 카드 접기·펼치기

## 실행

빌드나 의존성 설치 없이 정적 파일을 제공합니다.

```sh
python3 -m http.server 8000 --directory dist
```

브라우저에서 http://localhost:8000 을 엽니다. WebGL 지원이 필요합니다.

## 모델과 출처

행성 궤도는 JPL J2000 요소를 사용한 교육용 근사입니다. 천체 크기는 확대되어 있으며, 달의 지구 중심 궤도는 식별을 위해 60배 확대합니다. 실제 현재 위치나 실시간 관측 데이터를 재현하지 않습니다.

텍스처: [Solar System Scope](https://www.solarsystemscope.com/textures/), CC BY 4.0. 상세 출처는 [CREDITS.md](dist/textures/CREDITS.md)를 참조하세요. Three.js는 [MIT 라이선스](dist/vendor/THREE-LICENSE.txt)를 따릅니다.

## 변경 관리

이 프로젝트의 공식 변경 관리 저장소는 `hyunsikhwang/solar-system`입니다. 이후 코드와 자산의 변경을 이 저장소에 커밋하여 관리합니다. Sites 게시 주소와 기존 프로젝트 식별자는 유지합니다.

초기 이관 원본: Sites 소스 커밋 `7d8d25d293e74c013db2e32a23fd155b910c8454`. 이전 3개 커밋은 기존 Sites 소스 저장소에 보존되어 있습니다.
