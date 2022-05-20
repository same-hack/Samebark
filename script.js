/**
 * 背景画像をランダムで設定
 * @param {int} number 画像ファイル数
 * @returns {string} ファイルパス
 */
const backgroundSetting = (number) => {
  const numberOfImage = Math.floor(Math.random() * number + 1);
  return `./images/${numberOfImage}.jpg`;
};

// ファイル名
const fileName = backgroundSetting(18);
// 背景画像を差し替える
$(".container").css("background", "url(" + fileName + ") center / cover");

/**
 * 指定した桁数に0埋めする関数
 * @param {int} num 対象の数値
 * @param {int} zeroLength 埋めたい0の数
 * @return {String} 0埋めされた文字列
 */
const zeroPadding = (num, zeroLength) => {
  let zero = "";

  // zeroLength個の"0"をつける
  for (let i = 0; i < zeroLength; i++) {
    zero += "0";
  }

  // numの前に指定した数の"0"をつけ、末尾の文字数を削る
  return (zero + num).slice(-zeroLength);
};

const app = Vue.createApp({
  data() {
    return { clock: {} };
  },
  methods: {
    updateTime: function () {
      //現在の日付・時刻を取得
      let date = new Date();

      // 現在の時刻
      this.clock =
        zeroPadding(date.getHours(), 2) +
        ":" +
        zeroPadding(date.getMinutes(), 2);
    },
  },
  created() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
}).mount("#app");
