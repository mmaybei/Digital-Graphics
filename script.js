document.addEventListener("DOMContentLoaded", function () {

document.getElementById('movie').addEventListener('mouseenter', () => {
  document.querySelector('.movie-container').style.display = 'block';
});

document.getElementById('movie').addEventListener('mouseleave', () => {
  document.querySelector('.movie-container').style.display = 'none';
});

document.getElementById('info').addEventListener('mouseenter', () => {
  document.querySelector('.info-container').style.display = 'block';
});

document.getElementById('info').addEventListener('mouseleave', () => {
  document.querySelector('.info-container').style.display = 'none';
});

  // HTML 요소 가져오기
  const progressSelector = document.querySelector(".progress-bar");
  const indexContainer = document.querySelector(".index-container");
  const characterSelector = document.querySelector(".character");
  const dialogueSelector = document.querySelector(".dialogue");
  const descriptionSelector = document.querySelector(".description-container");
  const imageContainer = document.querySelector(".image-container");

  const data = [
    {
      index: "S#1-01",
      dialogue: [
        { character: "", text: "" },
        { character: "", text: "" }
      ],
      description: [
        "도로 위의 안내 표지판은 어두워서 잘 보이지 않는다.",
        "리듬감 있는 노래가 흘러 나온다."
      ],
      image: "./images/씬1-01.png"
    },
    {
      index: "S#1-02",
      dialogue: [
        { character: "", text: "" },
        { character: "", text: "" }
      ],
      description: [
        "자동차가 다가오는 듯 도로 위에 희미한 불빛이 보이고",
        "화면 위에 크게 뜨는 타이틀."
      ],
      image: "./images/씬1-02.png"
    },
    {
      index: "S#1-03",
      dialogue: [
        { character: "", text: "" },
        { character: "", text: "" }
      ],
      description: [
        "타이틀이 사라진 자리에 안내 표시판의 글자가 보인다.",
        "연이어 안내 표시판 아래를 지나가는 자동차."
      ],
      image: "./images/씬1-03.png"
    },
    {
      index: "S#2-01",
      dialogue: [
        { character: "", text: "" },
        { character: "", text: "" },
        { character: "", text: "" }
      ],
      description: [
        "현란한 손의 움직임.",
        "디제잉 소리와 함께 노출이 누적되어",
        "알아볼 수 없는 빛의 흔적들이 뿌려진다."
      ],
      image: "./images/씬2-01.png"
    },
    {
      index: "S#2-02",
      dialogue: [
        { character: "", text: "" },
        { character: "", text: "" },
        { character: "", text: "" },
        { character: "", text: "" }
      ],
      description: [
        "그 사이를 지나가는 자동차.",
        "깜빡이는 헤드 라이트.",
        "횡단보도를 지나가는 무수한 사람들.",
        "다시 앞을 향해 달려오는 자동차."
      ],
      image: "./images/씬2-02.png"
    },
    {
      index: "S#3-01",
      dialogue: [
        { character: "", text: "" }
      ],
      description: [
        "무릎에 머리를 대고 누워 있던 메구가 눈을 뜬다."
      ],
      image: "./images/씬3-01.png"
    },
    {
      index: "S#3-02",
      dialogue: [
        { character: "메구", text: "おかあちゃん。" },
        { character: "메구", text: "メグは母親を離れて韓国に来てもう" },
        { character: "", text: "4年になりました。" }
      ],
      description: [
        "운전하는 교환의 옆 모습.",
        "교환과 자동차의 POV가 겹쳐진다.",
        ""
      ],
      image: "./images/씬3-02.png"
    },
    {
      index: "S#3-03",
      dialogue: [
        { character: "", text: "" },
        { character: "메구", text: "私は今日、" },
        { character: "", text: "母に悩みを打ち明けようとしています。" }
      ],
      description: [
        "고개를 움직이는 교환의 얼굴 위로 푸른 빛의 조명이 드리운다.",
        "교환은 핸들을 잡고 있던 손을 메구의 뺨에 올려 놓는다.",
        ""
      ],
      image: "./images/씬3-03.png"
    },
    {
      index: "S#3-04",
      dialogue: [
        { character: "", text: "" },
        { character: "메구", text: "ク·ギョファンに別れようと言いたいが" }
      ],
      description: [
        "밝게 빛나는 자동차의 헤드라이트.",
        "메구의 뺨을 쓰다듬는 교환. 메구는 일어나려 고개를 든다."
      ],
      image: "./images/씬3-04.png"
    },
    {
      index: "S#3-05",
      dialogue: [
        { character: "메구", text: "傷つけたくないです。" }
      ],
      description: [
        "일어나 교환을 바라보는 메구. 교환은 여전히 운전을 하고 있다."
      ],
      image: "./images/씬3-05.png"
    },
    {
      index: "S#3-06",
      dialogue: [
        { character: "메구", text: "彼はとても弱い人なんですよ。" },
        { character: "", text: "" },
        { character: "", text: "" },
        { character: "", text: "" }
      ],
      description: [
        "자동차 내부에 계속하여 빛이 출렁이고",
        "다시 등장하는 빠르게 달리는 자동차의 POV.",
        "메구는 교환의 어깨에 손을 올린 채 조수석에 앉아",
        "한 손으로 운전대를 잡고 있다."
      ],
      image: "./images/씬3-06.png"
    },
    {
      index: "S#3-07",
      dialogue: [
        { character: "메구", text: "傷つけずに" },
        { character: "", text: "別れることができる方法がありますか？" }
      ],
      description: [
        "교환의 뺨에 가볍게 입 맞추는 메구.",
        "교환이 살며시 눈을 뜬다.",
      ],
      image: "./images/씬3-07.png"
    },
    {
      index: "S#4-01",
      dialogue: [
        { character: "", text: "" },
        { character: "", text: "" }
      ],
      description: [
        "습기가 찬 창문 너머로 보이는 백 미러.",
        "운전대를 잡고 있던 교환은 탄식과 함께 머리를 쓸어 넘긴다.",
      ],
      image: "./images/씬4-01.png"
    },
    {
      index: "S#4-02",
      dialogue: [
        { character: "교환", text: "아, 아!" },
        { character: "메구", text: "ダビンが食べたのが最後みたい。" }
      ],
      description: [
        "조수석에 앉아 창문에 기대어 있던 메구는",
        "껌을 찾으려 몸을 일으킨다."
      ],
      image: "./images/씬4-02.png"
    },
    {
      index: "S#4-03",
      dialogue: [
        { character: "교환", text: "아, 아!" },
        { character: "메구", text: "ダビンが食べたのが最後みたい。" }
      ],
      description: [
        "잠을 쫓으려 눈을 비비는 교환 옆에서 메구는 껌을 찾는다.",
        "껌이 없는 걸 확인하고 다시 창문에 머리를 기대는 메구."
      ],
      image: "./images/씬4-03.png"
    },
    {
      index: "S#4-04",
      dialogue: [
        { character: "다빈", text: "언니가 뭐래요?" },
        { character: "교환", text: "언니가 다빈이 너무 좋은 사람이라고." },
        { character: "", text: "친하게 지내래." }
      ],
      description: [
        "조수석 넘어로 뒷자리에 앉아",
        "껌을 씹고 있는 다빈이 보인다.",
        ""
      ],
      image: "./images/씬4-04.png"
    },
    {
      index: "S#4-05",
      dialogue: [
        { character: "다빈", text: "혹시 졸리세요?" },
        { character: "", text: "껌 씹으면 잠 좀 깨실 것 같애요?" },
        { character: "교환", text: "다빈이 껌 있어?" },
        { character: "다빈", text: "네." },
        { character: "교환", text: "뭐, 그럼 하나 줘." }
      ],
      description: [
        "계속하여 껌을 씹으며 교환에게 묻는 다빈.",
        "교환은 눈을 깜빡인다.",
        "메구는 여전히 창문에 기댄 채로 눈을 감고 있다.",
        "잠을 자고 있는 것인지 알 수 없다.",
        "다빈은 몸을 당겨 교환 쪽으로 고개를 내밀고 풍선껌을 만든다."
      ],
      image: "./images/씬4-05.jpg"
    },
    {
      index: "S#4-06",
      dialogue: [
        { character: "", text: "" },
        { character: "", text: "" },
        { character: "교환", text: "넣어 둬, 넣어 둬, 넣어 둬." },
        { character: "다빈", text: "싫으면 말고요." }
      ],
      description: [
        "자신의 입가로 손을 갖다대는 다빈은",
        "이내 씹던 껌을 뱉는다.",
        "껌을 둥글게 굴린 채 교환에게 보여주는 다빈.",
        "다빈과 교환은 웃는다."
      ],
      image: "./images/씬4-06.png"
    },
    {
      index: "S#4-07",
      dialogue: [
        { character: "교환", text: "그거 얼마나 씹었는데?" },
        { character: "다빈", text: "10분?" }
      ],
      description: [
        "다빈이 다시 껌을 입 속에 넣으려 하자",
        "교환이 묻는다."
      ],
      image: "./images/씬4-07.png"
    },
    {
      index: "S#4-08",
      dialogue: [
        { character: "", text: "" },
        { character: "", text: "" },
        { character: "", text: "" },
        { character: "다빈", text: "침 빼서 드릴까요?" }
      ],
      description: [
        "눈치를 살피는 교환.",
        "메구는 여전히 창문에 기대어 있다.",
        "눈을 감는 메구.",
        "교환의 고개가 메구를 향한다."
      ],
      image: "./images/씬4-08.png"
    },
    {
      index: "S#4-09",
      dialogue: [
        { character: "", text: "" },
      ],
      description: [
        "자동차는 여전히 앞을 향해 달린다."
      ],
      image: "./images/씬4-09.png"
    },
    {
      index: "S#4-10",
      dialogue: [
        { character: "교환", text: "아 미친 놈, 미친 놈, 미친 놈." },
        { character: "", text: "" },
        { character: "", text: "" }
      ],
      description: [
        "교환은 자신의 뺨을 때리며 크게 웃는다.",
        "언덕을 오르는 자동차.",
        "금새 자동차가 멈추고 자동차의 백 라이트가 꺼진다."
      ],
      image: "./images/씬4-10.png"
    },
    {
      index: "S#5-01",
      dialogue: [
        { character: "", text: "" },
        { character: "다빈", text: "감사합니다." },
        { character: "", text: "언니 조심히 가." }
      ],
      description: [
        "문이 닫히는 소리와 교환에게 걸어오는 다빈.",
        "다빈이 창문에 고개를 내밀어 말한다.",
        "그런 다빈을 쳐다보는 메구."
      ],
      image: "./images/씬5-01.png"
    },
    {
      index: "S#5-02",
      dialogue: [
        { character: "", text: "" },
        { character: "", text: "" },
        { character: "다빈", text: "아, 언니. 우리 내일 몇시에 만나?" }
      ],
      description: [
        "메구의 눈이 교환의 입을 향한다.",
        "껌을 씹고 있는 교환.",
        "그런 다빈을 쳐다보는 메구."
      ],
      image: "./images/씬5-02.png"
    },
    {
      index: "S#5-03",
      dialogue: [
        { character: "", text: "" },
        { character: "메구", text: "明日の午前。" },
        { character: "다빈", text: "언니 뭐래요?" },
        { character: "교환", text: "아, 내일은 쉬재." }
      ],
      description: [
        "세 사람 사이에 묘한 긴장감이 흐른다.",
        "",
        "",
        ""
      ],
      image: "./images/씬5-03.png"
    },
    {
      index: "S#5-04",
      dialogue: [
        { character: "", text: "" },
        { character: "", text: "" }
      ],
      description: [
        "교환은 여전히 껌을 씹고 있고,",
        "메구는 둘을 조용히 바라보기만 할 뿐이다."
      ],
      image: "./images/씬5-04.png"
    },
    {
      index: "S#5-05",
      dialogue: [
        { character: "다빈", text: "아 맞다, 언니 옷 두고 왔다." },
        { character: "메구", text: "あなた、持って。" },
        { character: "다빈", text: "언니 뭐래요?" },
        { character: "교환", text: "응, 돌려 달래." }
      ],
      description: [
        "",
        "",
        "",
        "교환은 잠시 메구를 쳐다보고는 다시 다빈에게 몸을 돌려 대답한다."
      ],
      image: "./images/씬5-05.png"
    },
    {
      index: "S#5-06",
      dialogue: [
        { character: "", text: "" }
      ],
      description: [
        "둘을 바라보는 메구. 머리를 묶는다."
      ],
      image: "./images/씬5-06.png"
    },
    {
      index: "S#5-07",
      dialogue: [
        { character: "다빈", text: "연락 할게." },
        { character: "교환", text: "화이팅." },
        { character: "다빈", text: "화이팅." }
      ],
      description: [
        "",
        "",
        "인사를 나누고 자리를 뜨는 다빈."
      ],
      image: "./images/씬5-07.png"
    },
    {
      index: "S#6-01",
      dialogue: [
        { character: "", text: "" },
        { character: "", text: "" },
        { character: "", text: "" },
        { character: "", text: "" }
      ],
      description: [
        "다시 달리는 자동차. 메구는 창문에 기대어 있다.",
        "그 위로 오버랩되는 풍선껌을 부는 교환의 입. ",
        "메구는 입술을 꽉 깨문다.",
        "슬퍼보이는 메구의 눈과 이를 놀리기라도 하듯 하늘을 뒤덮는 불꽃의 향연."
      ],
      image: "./images/씬6-01.png"
    },
    {
      index: "S#6-02",
      dialogue: [
        { character: "메구", text: "私が流す涙は喜びの涙であり、" }
      ],
      description: [
        "슬퍼보이는 메구의 얼굴."
      ],
      image: "./images/씬6-02.png"
    },
    {
      index: "S#6-03",
      dialogue: [
        { character: "", text: "家に帰る道は祭りだ。" },
        { character: "메구", text: "解放だ。さようなら、交換。" }
      ],
      description: [
        "메구의 얼굴에 미소가 띄고,",
        "불꽃이 터지는 소리가 오버랩된다."
      ],
      image: "./images/씬6-03.png"
    },
    {
      index: "S#7-01",
      dialogue: [
        { character: "", text: "" },
        { character: "", text: "" }
      ],
      description: [
        "이어폰을 꽂은 채로 등장하는 교환.",
        "언덕 너머로 어떤 집을 바라본다."
      ],
      image: "./images/씬7-01.png"
    },
    {
      index: "S#7-02",
      dialogue: [
        { character: "교환", text: "메구야, 나 보여?" },
        { character: "", text: "어떻게 해야 네 마음이 풀릴까?" },
        { character: "교환", text: "메구야." }
      ],
      description: [
        "무릎을 꿇는 교환의 모습이 보인다.",
        "다시 커튼을 닫는 메구.",
        "교환을 울부짖는다."
      ],
      image: "./images/씬7-02.png"
    },
    {
      index: "S#7-03",
      dialogue: [
        { character: "교환", text: "네가 시키는 대로 할게." },
        { character: "", text: "오더만 내려 줘." },
        { character: "교환", text: "메구야." }
      ],
      description: [
        "쪼그린 채 언덕에 올라가 있는 교환이 보인다.",
        "손에는 꽃다발이 들려있다.",
        ""
      ],
      image: "./images/씬7-03.png"
    },
    {
      index: "S#7-04",
      dialogue: [
        { character: "메구", text: "遅れた。お前は戻れない川を渡った。" },
        { character: "교환", text: "나 수영 잘해. 나 헤엄칠 수 있어." },
        { character: "", text: "나 할 수 있어, 메구." },
        { character: "", text: "메구야, 메구야." },
      ],
      description: [
        "커튼 너머로 교환을 바라보는 메구가 차갑게 말한다.",
        "계속하여 울부짖으며 허공에 팔을 휘젖는 교환.",
        "",
        ""
      ],
      image: "./images/씬7-04.png"
    },
    {
      index: "S#7-05",
      dialogue: [
        { character: "", text: "" },
        { character: "", text: "" }
      ],
      description: [
        "쪼그려 앉아 있던 교환이 일어난다.",
        "그러나 여전히 차가운 표정인 메구."
      ],
      image: "./images/씬7-05.png"
    },
    {
      index: "S#7-06",
      dialogue: [
        { character: "교환", text: "아, 아, 아." },
        { character: "", text: "솔직히 까놓고 말해서" },
        { character: "", text: "너도 내 친구랑 했잖아." }
      ],
      description: [
        "교환을 바라보는 메구의 뒷 모습.",
        "여전히 차가운 표정인 메구.",
        ""
      ],
      image: "./images/씬7-06.png"
    },
    {
      index: "S#7-07",
      dialogue: [
        { character: "메구", text: "あなたは永遠に川を渡った。 切って。" },
        { character: "교환", text: "메구야, 메구! 아니 그게... 메구!" },
      ],
      description: [
        "",
        ""
      ],
      image: "./images/씬7-07.png"
    },
    {
      index: "S#8-01",
      dialogue: [
        { character: "교환", text: "메구, 메구?" },
        { character: "", text: "" },
      ],
      description: [
        "교환은 안이 잘 보이지 않는 창문을 들여다 보며 메구를 부른다.",
        "고개를 숙인 채 가만히 앉아 있는 메구의 모습."
      ],
      image: "./images/씬8-01.png"
    },
    {
      index: "S#8-02",
      dialogue: [
        { character: "교환", text: "메구야, 내가 말실수를 했어." },
        { character: "", text: "흥분해가지고." },
        { character: "", text: "" },
      ],
      description: [
        "",
        "",
        "그제서야 메구의 시선이 창문을 향한다."
      ],
      image: "./images/씬8-02.png"
    },
    {
      index: "S#8-03",
      dialogue: [
        { character: "교환", text: "그때는 메구랑 내 친구랑" },
        { character: "", text: " 연인 사이였으니까 당연한 거지." },
        { character: "", text: "자연스러운 거고." },
        { character: "", text: "오히려 내 친구가 나한테 기분 나빠야지." },
      ],
      description: [
        "창문 앞에 서서 계속하여 말하는 교환.",
        "",
        "",
        ""
      ],
      image: "./images/씬8-03.png"
    },
    {
      index: "S#8-04",
      dialogue: [
        { character: "", text: "" },
        { character: "교환", text: "그치… 하," },
        { character: "", text: "내가 뭘 잘못했는지 알겠어 이제." }
      ],
      description: [
        "여전히 교환이 서 있는 창문 앞에 앉아 있는 메구의 모습.",
        "메구를 향해 말하는 교환의 모습이 보인다.",
        "그리고 창문에 비치는 메구의 얼굴."
      ],
      image: "./images/씬8-04.png"
    },
    {
      index: "S#8-05",
      dialogue: [
        { character: "교환", text: "메구야, 듣고 있지?" },
        { character: "", text: "" }
      ],
      description: [
        "추운 날씨 탓에 교환의 입가엔 김이 서려 있다.",
        "안이 보이지 않아 창문 앞에서 고개를 이리저리 돌려보는 교환."
      ],
      image: "./images/씬8-05.png"
    },
    {
      index: "S#8-06",
      dialogue: [
        { character: "", text: "" },
        { character: "", text: "" },
        { character: "교환", text: "메구우. 미안해." },
        { character: "", text: "너뿐이야." }
      ],
      description: [
        "교환은 손하트와 함께 창문에 휴대폰 전광판을 들이민다.",
        "이마를 짚는 메구.",
        "전광판엔 이모지와 함께 '메구 미안🥰' 이라는 글자가 써져있다.",
        ""
      ],
      image: "./images/씬8-06.png"
    },
    {
      index: "S#8-07",
      dialogue: [
        { character: "교환", text: "메구우." }
      ],
      description: [
        "교환은 휴대폰 전광판을 양옆으로 흔들며 다정한 목소리로 메구를 부른다."
      ],
      image: "./images/씬8-07.png"
    },
    {
      index: "S#8-08",
      dialogue: [
        { character: "메구", text: "入ってきて。" },
        { character: "교환", text: "거기 있었어?" }
      ],
      description: [
        "", 
        "들어오라는 메구의 목소리에 교환은 놀라며 대답한다."
      ],
      image: "./images/씬8-08.png"
    },
    {
      index: "S#9-01",
      dialogue: [
        { character: "교환", text: "내가 좋아하는 파스타 위에" },
        { character: "", text: "메구는 올리브를 올려 주었다." }
      ],
      description: [
        "파스타 위로 떨어지는 올리브들.",
        "그리고 입에서 올리브들을 마구 뱉어내는 메구."
      ],
      image: "./images/씬9-01.png"
    },
    {
      index: "S#9-02",
      dialogue: [
        { character: "교환", text: "우리가 다시 만나려면 이걸 먹어야 되나?" }
      ],
      description: [
        "교환은 그런 파스타를 가만히 쳐다보기만 할 뿐이다."
      ],
      image: "./images/씬9-02.png"
    },
    {
      index: "S#9-03",
      dialogue: [
        { character: "교환", text: "다시 만나자는" },
        { character: "교환", text: "메구의 프로포즈일지도 모른다." },
        { character: "", text: "여기서 잘해야 한다." }
      ],
      description: [
        "메구는 입을 닦고, 테이블 앞에 앉아 가만히 교환을 바라본다.",
        "",
        "그리고 잠자코 올리브를 집어 먹는 교환."
      ], 
      image: "./images/씬9-03.png"
    },
    {
      index: "S#9-04",
      dialogue: [
        { character: "교환", text: "사과를 받아줘서 고마워." }
      ],
      description: [
        "교환은 계속하여 올리브를 집어 먹으며 말한다."
      ],
      image: "./images/씬9-04.png"
    },
    {
      index: "S#9-05",
      dialogue: [
        { character: "", text: "" },
        { character: "교환", text: "천만의 말씀." },
        { character: "", text: "내 말이 끝나자마자 구토가 시작됐다." }
      ],
      description: [
        "침을 삼키는 메구.",
        "메구의 표정이 안 좋아지더니 위로 무언가를 쏟아내기 시작한다.",
        ""
      ],
      image: "./images/씬9-05.png"
    },
    {
      index: "S#9-06",
      dialogue: [
        { character: "교환", text: "신기한 건 우리가 처음으로 함께 먹은" },
        { character: "", text: "케밥이 나왔다는 거다." },
        { character: "", text: "무려 3년 전 케밥이다." }
      ],
      description: [
        "",
        "",
        ""
      ],
      image: "./images/씬9-06.png"
    },
    {
      index: "S#9-07",
      dialogue: [
        { character: "", text: "" },
        { character: "교환", text: "메구는 밤새 토했고," },
        { character: "", text: "나는 그 앞에 앉아 이별을 예감했다." }
      ],
      description: [
        "어두운 하늘에서 번개가 내려친다.",
        "",
        ""
      ],
      image: "./images/씬9-07.png"
    },
    {
      index: "S#10-01",
      dialogue: [
        { character: "교환", text: "메구는 나와 헤어지고 많이 아팠다." },
        { character: "", text: "허리 디스크에 걸린 것이다." },
        { character: "", text: "병문안을 가고 싶었지만 거절 당했다." }
      ],
      description: [
        "요가를 하는 메구의 모습. 다리를 들어 발 끝을 머리 위로 올린다.",
        "",
        ""
      ],
      image: "./images/씬10-01.png"
    },
    {
      index: "S#10-02",
      dialogue: [
        { character: "교환", text: "새로운 사람을 만나보고도 싶은데" },
        { character: "", text: "나에 대한 예의를 지키기 위해" },
        { character: "", text: "허리 디스크에 걸린 것이라고 했다." }
      ],
      description: [
        "앉은 자세로 다리에 얼굴을 엎드리는 메구.",
        "다시 다리를 펼치는 모양새가 꽤나 유연해보인다.",
        ""
      ],
      image: "./images/씬10-02.png"
    },
    {
      index: "S#10-03",
      dialogue: [
        { character: "교환", text: "멋있는 메구." },
        { character: "", text: "" }
      ],
      description: [
        "누운 채로 두 손을 들고 두 다리를 뻗어 X자 형태를 만드는 메구.",
        "그 자태가 마치 슈퍼맨 같다."
      ],
      image: "./images/씬10-03.png"
    },
    {
      index: "S#10-04",
      dialogue: [
        { character: "메구", text: "私は愛のスーパーマンだ。" },
        { character: "", text: "でもいつでも" },
        { character: "", text: "愛のヴィランになることもできる" }
      ],
      description: [
        "",
        "공중에 떠 있는 메구의 모습.",
        "메구의 얼굴이 점점 클로즈업된다."
      ],
      image: "./images/씬10-04.png"
    }
  ];

  // 선택된 인덱스
  let selectedButtons = [];
  let currentIndex = 0;

  // 목차 버튼 생성 및 클릭 이벤트
  data.forEach((item, idx) => {
    const p = document.createElement("p");
    p.textContent = item.index;
    p.classList.add("index-button");
    p.addEventListener("click", () => {
      currentIndex = idx;

      if (!selectedButtons.includes(p)) {
        selectedButtons.push(p);
      }

      selectedButtons.forEach(button => {
        button.style.backgroundColor = "#FFFE55";
      });

      renderData(idx);
      updateProgressBar();
    });
    indexContainer.appendChild(p);
  });

  // 데이터 렌더링 함수
  function renderData(index) {
    const item = data[index];

    // 인물 렌더링
    const characterWrapper = document.createElement("div");
    item.dialogue.forEach(dialogue => {
      const p = document.createElement("p");
      const textNode = document.createTextNode(dialogue.character || "\u00A0");
      p.appendChild(textNode);
      characterWrapper.appendChild(p);
    });
    characterSelector.appendChild(characterWrapper);

    // 대사 렌더링
    const dialogueWrapper = document.createElement("div");
    item.dialogue.forEach(dialogue => {
      const p = document.createElement("p");
      const textNode = document.createTextNode(dialogue.text || "\u00A0");
      p.appendChild(textNode);
      dialogueWrapper.appendChild(p);
    });
    dialogueSelector.appendChild(dialogueWrapper);

    // 지문 렌더링
    const descriptionWrapper = document.createElement("div");
    const descriptionTextWrapper = document.createElement("div");
    item.description.forEach(desc => {
      const p = document.createElement("p");
      const textNode = document.createTextNode(desc || "\u00A0");
      p.appendChild(textNode);
      descriptionTextWrapper.appendChild(p);
    });

    // 다음 버튼 생성 및 클릭 이벤트
    const next = document.createElement("p");
    next.textContent = ">>";
    next.classList.add("next-button");

    next.classList.add("blinking");
    const previousNextButtons = document.querySelectorAll(".next-button");
    previousNextButtons.forEach(button => {
      button.classList.remove("blinking");
    });

    next.addEventListener("click", () => {
      if (currentIndex < data.length - 1) {
        currentIndex += 1;
        renderData(currentIndex);
      } else {
        console.log("마지막 데이터입니다!");
      }
    });

    descriptionWrapper.appendChild(descriptionTextWrapper);
    descriptionWrapper.appendChild(next);
    descriptionSelector.appendChild(descriptionWrapper);

    // 이미지 렌더링
    const img = document.createElement("img");
    img.src = item.image;
    imageContainer.appendChild(img);

    // 자동 스크롤
    descriptionWrapper.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  function updateProgressBar() {
    const totalItems = data.length;
    const progressWidth = (currentIndex + 1) / totalItems * 100;
    progressSelector.style.width = `${progressWidth}vw`;
  }

  renderData(0);
  updateProgressBar();
});