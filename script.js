class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.playDrum = this.playDrum.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.playKeyPress);
  }

  playKeyPress(e) {
    const ids = e.key.toUpperCase();
    const sound = document.getElementById(ids);
    sound.currentTime = 0;
    sound.play();
    const button = document.getElementById(ids).parentElement;
    document.getElementById("display").innerHTML = button.id.replace(/[-]/g, ' ');
    document.getElementById("display").style.visibility = "visible";
    button.classList.add("pressed");
    setTimeout(function () {
      button.classList.remove("pressed");
    }, 100);
  }

  playDrum() {
    const sound = document.getElementById(this.props.id);
    sound.currentTime = 0;
    sound.play();
    console.log(this);
    const button = document.getElementById(this.props.id).parentElement;
    document.getElementById("display").innerHTML = button.id.replace(/[-]/g, ' ');
    document.getElementById("display").style.visibility = "visible";
    button.classList.add("pressed");
    setTimeout(function () {
      button.classList.remove("pressed");
    }, 100);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "drum-pad", onClick: this.playDrum, id: this.props.name }, /*#__PURE__*/
      React.createElement("audio", { className: "clip", id: this.props.id, src: this.props.audio }),
      this.props.id));


  }}


class Drumpad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
  render() {
    const pads = [
    {
      name: "Heater-1",
      innerText: "Q",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

    {
      name: "Heater-2",
      innerText: "W",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

    {
      name: "Heater-3",
      innerText: "E",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

    {
      name: "Heater-4",
      innerText: "A",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

    {
      name: "Clap",
      innerText: "S",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

    {
      name: "Open-HH",
      innerText: "D",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

    {
      name: "Kick-and-Hat",
      innerText: "Z",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

    {
      name: "Kick",
      innerText: "X",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

    {
      name: "Closed-HH",
      innerText: "C",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];


    return /*#__PURE__*/(
      React.createElement("div", { id: "padbox" },
      pads.map((pad) => /*#__PURE__*/
      React.createElement(Pad, { name: pad.name, id: pad.innerText, key: pad + 1, audio: pad.url }))));


  }}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '' };

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-image" }), /*#__PURE__*/
      React.createElement("div", { id: "display" }, "Drum Machine"), /*#__PURE__*/
      React.createElement(Drumpad, null)));


  }}
;

ReactDOM.render( /*#__PURE__*/React.createElement(App, { class: "App" }), document.getElementById('root'));