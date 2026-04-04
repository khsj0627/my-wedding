/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "최경환",
    nameEn: "Groom",
    father: "최동훈",
    mother: "김미숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이수진",
    nameEn: "Bride",
    father: "이청희",
    mother: "최미남",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-06-27",
    time: "11:00",
    venue: "수원 파티웨딩유",
    hall: "2층 아모르홀",
    address: "경기 수원시 권선구 세화로 218",
    tel: "031-297-1000",
    mapLinks: {
      kakao: "https://place.map.kakao.com/18152810",
      naver: "https://naver.me/GkR3XjYm"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "어느덧 9년, 긴 시간 동안 한결같이 곁을 지켜준 사람과,\n서툴지만 진심이었던 첫 만남의 설렘을 기억합니다.\n\n이제 서로의 버팀목이자 그늘이 되어주겠습니다.\n귀한 걸음 하시어 저희의 앞날을 지켜봐 주세요.\n\n예쁘게 살겠습니다"},

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "최경환", bank: "기업은행", number: "635-015295-01-015" },
      { role: "아버지", name: "최동훈", bank: "농협은행", number: "127-02-241820" },
    ],
    bride: [
      { role: "신부", name: "이수진", bank: "국민은행", number: "422001-04-164268" },
      { role: "아버지", name: "이청희", bank: "우리은행", number: "1002-657-509863" },
      { role: "어머니", name: "최미남", bank: "농협은행", number: "302-15953874-11" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "최경환 ♥ 이수진 결혼합니다",
    description: "2026년 6월 27일, 소중한 분들을 초대합니다."
  }
};
