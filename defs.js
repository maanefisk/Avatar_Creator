function genratedefs() {
    let defs = document.getElementById('avatardefs');
    let defstext = '';

    for (de = 0; de < model.categories.length; de++) {
        let gcat = model.categories[de];

        defstext += '<linearGradient id="gradient1'+gcat+'" x1="0" x2="0" y1="0" y2="1">\n' +
            '                                <stop class="g1'+gcat+'" offset="0%" stop-color="#000000"/>\n' +
            '                    <stop class="g2'+gcat+'" offset="50%" stop-color="#ffffff"/>\n' +
            '                    <stop class="g3'+gcat+'" offset="100%" stop-color="#000000"/>\n' +
            '                            </linearGradient>\n' +
            '                <linearGradient id="gradient2'+gcat+'" x2="1" y2="1">\n' +
            '                                <stop class="g1'+gcat+'" offset="0%" stop-color="#ffffff" />\n' +
            '                    <stop class="g2'+gcat+'" offset="100%" stop-color="#000000" />\n' +
            '                            </linearGradient>\n' +
            '                <linearGradient id="gradient3'+gcat+'" gradientTransform="rotate(90)">\n' +
            '                                <stop class="g1'+gcat+'" offset="5%"  stop-color="#ffffff" />\n' +
            '                    <stop class="g2'+gcat+'" offset="95%" stop-color="#000000" />\n' +
            '                            </linearGradient>\n' +
            '                <linearGradient id="gradient4'+gcat+'">\n' +
            '                                <stop class="g1'+gcat+'" offset="5%"  stop-color="#ffffff" />\n' +
            '                    <stop class="g2'+gcat+'" offset="50%" stop-color="#000000" />\n' +
            '                    <stop class="g3'+gcat+'" offset="95%"  stop-color="#ffffff" />\n' +
            '                            </linearGradient>\n' +
            '                <radialGradient id="gradient5'+gcat+'">\n' +
            '                                <stop class="g1'+gcat+'" offset="20%" stop-color="#ffffff" />\n' +
            '                    <stop class="g2'+gcat+'" offset="100%" stop-color="#000000" />\n' +
            '                            </radialGradient>\n';
    }
    defs.innerHTML = defstext;
}