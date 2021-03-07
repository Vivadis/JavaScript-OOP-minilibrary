export default class Customizator {
    constructor() {
        this.btnBlock = document.createElement('div');
        this.colorPicker = document.createElement('input');

        this.btnBlock.addEventListener('click', (e) => this.onScaleChange(e));
    }

    onScaleChange(e) {
        let scale;
        const body = document.querySelector('body');
        if (e.target.value) {
            scale = +e.target.value.replace(/x/g, "");
        }

        function recursy(element) {
            element.childNodes.forEach(node => {
                if (node.nodeName === '#text' && node.nodeValue.replace(/\s+/g, "").length > 0){
                    
                    if() {
                        let value = window.getComputedStyle(node.parentNode, null).fontSize;
                        node.parentNode.setAttribute()
                        node.parentNode.style.fontSize = +value.replace(/px/g, "") * scale + "px";
                    }

                    let value = window.getComputedStyle(node.parentNode, null).fontSize;
                    node.parentNode.style.fontSize = +value.replace(/px/g, "") * scale + "px";
                } else {
                    recursy(node);
                }
            })
        }
        recursy(body);

        console.log(scale);
    }

    render() {
        let scaleInputS = document.createElement('input');
            scaleInputM = document.createElement('input');
            panel = document.createElement('div');

        panel.append(this.btnBlock, this.colorPicker);

        scaleInputS.classList.add('scale_btn');
        scaleInputM.classList.add('scale_btn');
        this.btnBlock.classList.add('scale');
        this.colorPicker.classList.add('color');

        scaleInputS.setAttribute('type', 'button');
        scaleInputM.setAttribute('type', 'button');
        scaleInputS.setAttribute('value', '1x');
        scaleInputM.setAttribute('value', '1.5x');
        this.colorPicker.setAttribute('type', 'color');
        this.colorPicker.setAttribute('value', '#ffffff');

        this.btnBlock.append(scaleInputS, scaleInputM);

        panel.classList.add('panel');

        document.querySelector('body').append(panel);

        console.log(this.btnBlock, scaleInputS, scaleInputM);
    }
}