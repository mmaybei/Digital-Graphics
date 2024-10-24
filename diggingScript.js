document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("grid-container");
  const footerContainer = document.getElementById("footer-container");

  const albumModal = document.getElementById("album-modal");
  const albumImage = document.getElementById("album-image");
  const closeAlbumModal = albumModal.querySelector(".close");

  const titleModal = document.getElementById("title-modal");
  const titleModalContent = titleModal.querySelector(".title-modal-content p");
  const closeTitleModal = titleModal.querySelector(".close");

  const lyricsModal = document.getElementById("lyrics-modal");
  const lyricsModalContent = lyricsModal.querySelector(
    ".lyrics-modal-content p"
  );
  const closeLyricsModal = lyricsModal.querySelector(".close");

  const footerContainerHeight = footerContainer.offsetHeight;
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight - footerContainerHeight;

  const squareSize = containerWidth / 56;
  const numRows = Math.ceil(containerHeight / squareSize);
  const totalSquares = 56 * numRows;

  // 랜덤 좌표를 저장할 배열
  const randomIndices = new Set();

  // 현재 재생 중인 음악
  let currentAudio = null;
  let currentAudioSrc = "";

  // 각 음악의 정보 배열
  const musicInfos = [
    {
      albumImgSrc: "./albumImgSrc/그늘은그림자로.png",
      musicSrc: "./musicSrc/그늘은그림자로.mp3",
      titleInfo: "그늘은 그림자로",
      lyricsInfo:
        "나를 따라 다니던 그늘이 짙던 날\n잠든 너를 보며 나는 밤새 울었어\n이제 우리 다시 나란히 누울 순 없겠지\n혼자 있기 두려운 난 너의 집에 남아있었네\n나를 아직 사랑한다 믿어도 되는지\n확인해야 하는데 내 입은 떼지지 않네\n이제 우리 다시 나란히 걸을 순 없겠지\n혼자인 걸 알면 됐어 이제 그만 돌아가야 해\n오 사랑은 상처만 남기고\n이제 우리 다시 나란히 누울 순 없겠지\n나를 따라 다니던 그늘이 짙던 날\n잠든 너를 보며 나는 밤새 울었어\n이제 우리 다시 나란히 누울 순 없겠지\n혼자 있기 두려운 난 너의 집에 남아있었네\n오 사랑은 상처만 남기고\n이제 우리 다시 나란히 누울 순 없겠지\n나를 따라 다니던 그늘이 짙던 날\n나를 따라 다니던 그늘이 짙던 날\n나를 따라 다니던 그늘이 짙던 날\n나를 따라 다니던 그늘이 짙던 날\n",
    },
    {
      albumImgSrc: "./albumImgSrc/난너만사랑해서.png",
      musicSrc: "./musicSrc/난너만사랑해서.mp3",
      titleInfo: "난 너만 사랑해서",
      lyricsInfo:
        "그 날 너에게 말하려 했어 얼마나 너를 사랑하고 있는지\n다만 용기를 내지 못했어\n두 번 다시 너를 볼 수 없게 될까 봐\n잠 못 드는 밤에 널 떠올린 나는 생각보다 위태롭고\n하나도 나는 괜찮지 않아서 너의 이름만\n불러본 거야 마음 속으로\n이마저 용기를 내지 못해 겁쟁이라 나는\n알아 너에게 어울리는 건 내가 아닌 다른 사람이란 걸\n다만 그 동안 널 지켜온 건 그 사람이 아닌 나라는 걸 아니\n잠 못 드는 밤에 널 떠올린 나는 생각보다 위태롭고\n하나도 나는 괜찮지 않아서 너의 이름만\n불러본 거야 마음 속으로\n이마저 용기를 내지 못해 겁쟁이라 그래 나는\n너의 이름 세 글자에 꼭 맞는 글자로\n전하고 싶었어 널 향한 나의 마음을\n잠 못 드는 밤에 널 떠올린 나는 생각보다 위태롭고\n하나도 나는 괜찮지 않아서 너의 이름만\n불러본 거야 왜 이제서야\n용기를 내는 건지 몰라 널 좋아해 나는\n",
    },
    {
      albumImgSrc: "./albumImgSrc/내마음에비친내모습.png",
      musicSrc: "./musicSrc/내마음에비친내모습.mp3",
      titleInfo: "내 마음에 비친 내 모습",
      lyricsInfo:
        "붙들 수 없는 꿈의 조각들은 하나 둘 사라져 가고\n쳇바퀴 돌듯 끝이 없는 방황에 오늘도 매달려 가네\n거짓인 줄 알면서도 겉으로 감추며\n한숨섞인 말 한 마디에 나만의 진실 담겨 있는 듯\n이제와 뒤늦게 무엇을 더 보태려 하나\n귀 기울여 듣지 않고 달리 보면 그만인 것을\n못 그린 내 빈 곳 무엇으로 채워지려나\n차라리 내 마음에 비친 내 모습 그려가리\n엇갈림 속의 긴 잠에서 깨면 주위엔 아무도 없고\n묻진 않아도 나는 알고 있는 곳\n그 곳에 가려고 하네\n근심 쌓인 순간들을 힘겹게 보내며\n지워버린 그 기억들을\n생각해내곤 또 잊어버리고\n이제와 뒤늦게 무엇을 더 보태려 하나\n귀 기울여 듣지 않고 달리 보면 그만인 것을\n못 그린 내 빈 곳 무엇으로 채워지려나\n차라리 내 마음에 비친 내 모습 그려가리\n이제와 뒤늦게 무엇을 더 보태려 하나\n귀 기울여 듣지 않고 달리 보면 그만인 것을\n못 그린 내 빈 곳 무엇으로 채워지려나\n차라리 내 마음에 비친 내 모습 그려가리\n",
    },
    {
      albumImgSrc: "./albumImgSrc/덩그러니.png",
      musicSrc: "./musicSrc/덩그러니.mp3",
      titleInfo: "덩그러니",
      lyricsInfo:
        "널 보고 있어 어쩌면 우린 닮은 것 같아\n사실 그래 알아 별 다를 것도 없는 날이야\n우린 길을 잃어 아니 처음부터 몰랐었지만\n난 널 따라 걸어 조금은 자신이 없어도\n그대와 나눴던 짧은 이야기들과\n서로가 바랐던 작은 세상 속에서\n이렇게 남겨진 우린 볼품 없지만\n손은 놓지 않을거야 놓지 않을거야\n시간이 가도 새로움보단 끝이 많았고\n우린 그냥 여기 조금은 뒤쳐진다 해도\n그대와 나눴던 짧은 이야기들과\n서로가 바랐던 작은 세상 속에서\n이렇게 남겨진 우린 볼품 없지만\n손은 놓지 않을거야 놓지 않을거야\n널 보고 있어 어쩌면 우린 다른 것 같아\n사실 그래 알아 별다를 것도 없는 우리야\n그대와 나눴던 짧은 이야기들과\n서로가 바랐던 작은 세상 속에서\n이렇게 남겨진 우린 볼품 없지만\n손은 놓지 않을거야 놓지 않을거야\n우리가 그렸던 밤은 오질 않지만\n서로가 닿았던 모진 세상 속에서\n이렇게 남겨진 우린 볼품 없지만\n손은 놓지 않을거야 놓지 않을거야\n",
    },
    {
      albumImgSrc: "./albumImgSrc/모래성.png",
      musicSrc: "./musicSrc/모래성.mp3",
      titleInfo: "모래성",
      lyricsInfo:
        "더 이상은 모래성이 깊은 환상 속에 영원히\n보이지 않는다 말해요\n우리의 남은 사랑이 결을 숨길 순 있어도\n그 섬광은 빛나고 있겠죠\n남아있던 모래알을 기억해\n떠나간 자리로 되돌아올 수 있게\n부서질 줄 알면서 지나가요\n내 헛된 맘을 달래줄 그대 내게 와요\n잊혀있던 저 모래성을 찾아요\n내 안에 가둔 우리 사랑일 테니\n순간 속 남은 모래성은 지나간 시간을 덮고서\n아득하게 살아간대요\n밀어냈던 그 단어도 애정 하던 눈빛 속에\n안개처럼 존재하고 있죠\n남아있던 모래알을 기억해\n떠나간 자리로 되돌릴 수 있게\n부서질 줄 알면서 지나가요\n내 헛된 맘을 달래줄 그대 내게 와요\n잊혀있던 저 모래성을 찾아요\n무너지면 흘러가는 대로\n서두른 맘은 멀어져요 꼭 붙어있어요\n잊혀있던 날들이여 이제는 고갤 들어봐요\n그대와 내가 눈을 맞추고 모래알을 한 움큼 들고\n지친 내 맘을 세우면 그건 사랑일 테니\n",
    },
    {
      albumImgSrc: "./albumImgSrc/사랑이너무헤퍼.png",
      musicSrc: "./musicSrc/사랑이너무헤퍼.mp3",
      titleInfo: "사랑이 너무 헤퍼",
      lyricsInfo:
        "사랑이 너무 헤퍼서 그 말을 못 했네\n말라붙은 입에 잘못은 아니고\n스쳐진 옷깃에 우리 인연이었는데\n떠나가 버리면 난 어떡해야 해\n풀어진 마음 한가운데 조각인 게\n사랑이라 웃지 않으면 너는 바보일 거야\n얘길 해도 내 사랑이 헤퍼\n그게 어리석다 무시했겠지\n다들 기억할 거야\n사랑에 아픈 기억이 오늘을 덮칠 때\n어쩔 줄 몰라서 멈춰진 발걸음\n가만히 보다 이상해 주변을 살피니\n겁을 먹은 건 나뿐이 아니네\n풀어진 마음 한가운데 조각인 게\n사랑이라 웃지 않으면 너는 바보일 거야\n얘길 해도 내 사랑이 헤퍼\n그게 어리석다 무시했겠지\n다들 기억할 거야\nI need you love I need you more\nif you're in there you know I love you\nI need you love I need you more\nif you're in there you know I love you\n풀어진 마음 한가운데 조각인 게\n사랑이라 웃지 않으면 너는 바보일 거야\n얘길 해도 내 사랑이 헤퍼\n그게 어리석다 무시했겠지\n다들 기억할 거야\nI need you love I need you more\nif you're in there you know I love you\nI need you love I need you more\nif you're in there you know I love you\n",
    },
    {
      albumImgSrc: "./albumImgSrc/아무것도상관없어.png",
      musicSrc: "./musicSrc/아무것도상관없어.mp3",
      titleInfo: "아무것도 상관 없어",
      lyricsInfo:
        "난 아무것도 상관없어 네 맘대로 해도\n어차피 내 말 따위는 믿어주지도 않으니\n네 입안에서 내 이름이 굴러다닌대도\n내 몸이 한순간에 어디로 팔려 갔대도\n우우 엄마는 모든 것은 있다가도 없댔는데\n우우 어젯밤 곰곰이 생각해보니\n맞는 것도 같아\nHey hey I would not live for you ever\n내 길 위에 네가 발을 내밀고 있대도\nHey hey hey I would not live for you ever\n이제 와 생각해보니 별일도 아니네\n난 아무것도 상관없어 네 맘대로 해도\n어차피 내 눈 따위는 쳐다보지도 않으니\n내 등 뒤에 네 그림자가 날 가린다 해도\n내 몸이 한순간에 어디로 날아갔대도\n우우 아빠는 그 무엇도 사랑하지 말랬는데\n우우 어젯밤 곰곰이 생각해보니\n맞는 것도 같아\nHey hey I would not live for you ever\n내 길 위에 네가 발을 내밀고있대도\nHey hey hey I would not live for you ever\n이제 와 생각해보니 별일도 아니네\n난 아무것도 상관없어 날 떠난다 해도\n어차피 내 옆자리엔 아무도 없었으니\n",
    },
    {
      albumImgSrc: "./albumImgSrc/bleu-bulb-light.png",
      musicSrc: "./musicSrc/bleu-bulb-light.mp3",
      titleInfo: "bleu-bulb-light",
      lyricsInfo:
        "그날도 역시 난 비에 젖은 들쥐처럼 지쳐 있었지\n가득찬 연기와 술향기에 뒤섞이는 빈 웃음소리들\n눈을 마주친 언제인가 만난듯한 검은 눈동자\n우린 짧지만 깊은 눈빛과 설레이는 인사를 나눴지\n바로 이 순간 우리 외에 남은 것은 푸른전구빛 뿐\n언제 나와 같이 저 귀여운 아름다운 달빛속으로\n영원할 수 없다는 것을 알아\n너와 나 사이의 이 푸른빛이\n그래도 역시 나는 말을 하지\n널 사랑해 널 사랑해 언제까지나\n아직도 남아있는 할 말이 더 있다면 바로 지금 해\n그래 어차피 모든 것이 다 이렇게 흘러가니까\n바로 이 순간 우리에게 남은 것은 푸른 기억들뿐\n언제 우리 다시 점심이나 저녁이나 함께 하겠지\n역시 아침은 다시 나를 찾고\n우리들은 슬픈 세상 속으로\n다시 또 누군가를 만나겠지\n비에 젖은 들쥐처럼 지쳐있을 때\n영원할 수 없다는 것을 알아\n너와 나 사이의 이 푸른빛이\n그래도 역시 나는 말을 하지\n널 사랑해 널 사랑해 언제까지나\n",
    },
    {
      albumImgSrc: "./albumImgSrc/mouse.png",
      musicSrc: "./musicSrc/mouse.mp3",
      titleInfo: "Mouse",
      lyricsInfo:
        "Hey 긴 고요 속에\n숨죽여 있는 법을 알고 있지 않니\n그 방법을 나에게도 알려줘\n때가 되면 우린 모두 어디론가 사라질 거잖아\n난 어쩌면 분주한 사람들 틈에\n더 가만히 있는 법을 배웠어\nOh I must pretend to be dead\nI'm in this city\nAnd I'm going through the night\nOh I have to hold my breath\nI will find love and find a way\nTo survive here\n모두가 지나가고\n난 후에야 머리를 내어 소릴 내\n안길 품 없는 온몸에는 얼룩이 번지네\n때가 되면 우린 모두\n어디론가 사라질 거잖아\n난 어쩌면 분주한 사람들 틈에\n더 가만히 있는 법을 배웠어\nOh I must pretend to be dead\nI'm in this city\nAnd I’m going through the night\nOh I have to hold my breath\nI will find love\nAnd find a way to survive here\nOh I must pretend to be dead\nI'm in this city\nAnd I'm going through the night\nOh I have to hold my breath\nI will find love\nAnd find a way to survive here\n나는 왜 적막을 견디질 못해\n삐끗하다간 더 크게 다칠 텐데\n저길 봐 그림자가 흔들리잖아\n",
    },
    {
      albumImgSrc: "./albumImgSrc/sadness.png",
      musicSrc: "./musicSrc/sadness.mp3",
      titleInfo: "평정심",
      lyricsInfo:
        "방문을 여니 침대 위에 슬픔이 누워있어\n그 곁에 나도 자리를 펴네\n오늘 하루 어땠냐는 너의 물음에\n대답할 새 없이 꿈으로\n아침엔 기쁨을 보았어\n뭐가 그리 바쁜지 인사도 없이 스치고\n분노와 허탈함은 내가 너무 좋다며\n돌아오는 길 내내 떠날 줄을 몰라\n평정심,\n찾아헤맨 그이는 오늘도 못 봤어\n뒤섞인 감정의 정처를 나는 알지 못해\n비틀 비틀 비틀 비틀 비틀거리네\n울먹 울먹 울먹이는 달그림자 속에서\n역시 내게 너만 한 친구는 없었구나\n또다시 난 슬픔의 품을 그렸어\n내일은 더 나을 거란 너의 위로에\n대답할 새 없이 꿈으로\n평정심,\n찾아 헤맨 그이는 오늘도 못 봤어\n뒤섞인 감정의 정처를 나는 알지 못해\n비틀 비틀 비틀 비틀 비틀거리네\n울먹 울먹 울먹이는 달그림자 속에서\n역시 내게 너만 한 친구는 없었구나\n또다시 난 슬픔의 품을 그렸어\n비틀 비틀 비틀 비틀 비틀거리네\n울먹 울먹 울먹이는 달그림자 속에서\n비틀 비틀 비틀 비틀 비틀거리네\n울먹 울먹 울먹이는 달그림자 속에서\n비틀 비틀 비틀 비틀 비틀거리네\n울먹 울먹 울먹이는 달그림자 속에서\n비틀 비틀 비틀 비틀 비틀거리네\n울먹 울먹 울먹이는 달그림자 속에서\n",
    },
  ];

  // 랜덤으로 10개의 인덱스 생성
  while (randomIndices.size < 10) {
    const randomIndex = Math.floor(Math.random() * totalSquares);
    randomIndices.add(randomIndex);
  }

  // 그리드 생성
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", function () {
      if (randomIndices.has(i)) {
        square.style.backgroundColor = "#ff67b9";
        square.style.cursor = "pointer";
      } else {
        if (square.style.backgroundColor !== "#ffcbe7") {
          square.style.backgroundColor = "#ffcbe7";
        }
      }
    });

    square.addEventListener("click", function () {
      if (randomIndices.has(i)) {
        const index = [...randomIndices].indexOf(i);
        if (index !== -1) {
          const selected = musicInfos[index];
          albumImage.src = selected.albumImgSrc;
          console.log(currentAudioSrc);

          // 랜덤 좌표 계산 및 모달 위치 설정
          const modalWidth = 480;
          const modalHeight = 300;

          let modalLeft = Math.random() * (window.innerWidth - modalWidth - 20);
          let modalTop =
            Math.random() * (window.innerHeight - modalHeight - 20);

          albumModal.style.left = `${modalLeft}px`;
          albumModal.style.top = `${modalTop}px`;
          albumModal.style.display = "block";

          console.log("window-width: " + window.innerWidth);
          console.log("window-height: " + window.innerHeight);
          console.log("image-width: " + albumModal.offsetWidth);
          console.log("image-height: " + albumModal.offsetHeight);
          console.log("left: " + modalLeft);
          console.log("top: " + modalTop);

          // titleModal의 크기 설정
          const titleModalWidth = 500;
          const titleModalHeight = 134;

          // 랜덤 좌표 계산 및 모달 위치 설정
          let titleModalLeft =
            Math.random() * (window.innerWidth - titleModalWidth - 20);
          let titleModalTop =
            Math.random() * (window.innerHeight - titleModalHeight - 20);

          // titleModal의 위치 설정
          titleModal.style.left = `${titleModalLeft}px`;
          titleModal.style.top = `${titleModalTop}px`;
          titleModal.style.width = `${titleModalWidth}px`;
          titleModal.style.height = `${titleModalHeight}px`;
          titleModal.style.display = "block";

          // titleModal에 제목 표시
          titleModalContent.textContent = selected.titleInfo;
          titleModal.style.display = "block";

          // lyricsModal에 제목 표시
          lyricsModalContent.textContent = selected.lyricsInfo;
          lyricsModalContent.innerHTML = selected.lyricsInfo.replace(
            /\n/g,
            "<br>"
          );
          lyricsModal.style.display = "block";

          // 현재 재생 중인 음악과 선택된 음악이 같은 경우
          if (currentAudio && currentAudioSrc === selected.musicSrc) {
            if (currentAudio.paused) {
              currentAudio.play();
              console.log("play");
            } else {
              currentAudio.pause();
              console.log("pause");
            }
          } else {
            // 현재 재생 중인 음악 정지
            if (currentAudio) {
              currentAudio.pause();
              console.log("pause");
            }
            // 새로운 음악 재생
            currentAudio = new Audio(selected.musicSrc);
            currentAudioSrc = selected.musicSrc;
            currentAudio.play();
            console.log(currentAudioSrc);
            console.log("play");
          }
        }
      }
    });

    gridContainer.appendChild(square);
  }

  closeAlbumModal.addEventListener("click", function () {
    // 모달 닫힐 때 음악 정지
    albumModal.style.display = "none";
    if (currentAudio) {
      currentAudio.pause();
    }
  });

  closeTitleModal.addEventListener("click", function () {
    titleModal.style.display = "none";
  });

  closeLyricsModal.addEventListener("click", function () {
    lyricsModal.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const diggingText = document.getElementById("digging");
  const diggingModal = document.getElementById("digging-modal");
  const closeDiggingModal = diggingModal.querySelector(".close");

  // 디깅 텍스트 클릭 시 모달 보이기
  diggingText.addEventListener("click", function () {
    diggingModal.style.display = "block";
  });

  // 닫기 버튼 클릭 시 모달 숨기기
  closeDiggingModal.addEventListener("click", function () {
    diggingModal.style.display = "none";
  });
});
