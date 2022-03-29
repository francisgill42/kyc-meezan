export default ({app},inject) => {

    let secrets = {
        sitekey : '6LeZeykaAAAAAILTse8_kZa6-PSKvC7NFaZuOa7l'
    };

    inject('secrets',secrets);
  }