function dataRender(data, mainContainer){
    const domElement = document.createElement(data.type);
    domElement.innerHTML = "this is a site URL"
    // domElement.setAttribute('href',data.props.href);
    // domElement.setAttribute('children',data.children);

    for (const key in mainContainer.props) {
        if(key == 'children') continue;
        domElement.setAttribute(prop, mainContainer.props[prop]);
    }

    mainContainer.append(domElement);
}


const mainContainer = document.querySelector('#root');

const data = {
    type:'a',
    props:{
        href:'www.google.in',
        target:'_blank'
    },
    children:'This is the site URL'
};


dataRender(data, mainContainer);