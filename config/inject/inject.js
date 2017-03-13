/* Injects the radio title into the banner */
fetch('http://radio.homebrewserver.club:8000/status3.xsl?callback=parseMusic')
.then(
	function (response) {
		response.text().then( function (text) {
			var a = JSON.parse(text.match(/\{.*\}/g));
			var title = a['/radio']['title'];

			var el = document.getElementById('banner_info');
			var radio = document.createElement('a');
			radio.setAttribute('href',"radio.homebrewserver.club");
			radio.innerText = title;
			el.appendChild(document.createTextNode(' [Radio - '));
			el.appendChild(radio);
			el.appendChild(document.createTextNode(']'));
        });});
