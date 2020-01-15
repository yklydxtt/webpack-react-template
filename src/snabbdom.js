function vnode(sel,data,children,text,elm,key){
    return {sel,data,children,text,elm,key}
}
function isarray(item){
    return Array.isArray(item)
}
function isText(item){
    return typeof item==='string'|| typeof item==='number'
}
function init(){
    function createElem(){

    }
    function patchVnode(){

    }
}
function h(sel,b,c){
    var data={},children,text,i;
    if(c!=='undefined'){
        if(isarray(c)){
            children=c;
        }else if(isText(c)){
            text=c;
        }else if(c&&c.sel){
            children=[c]
        }
    }else if(b!=='undefined'){
        if(isarray(b)){
            children=b;
        }else if(isText(b)){
            text=b;
        }else if(b&&b.sel){
            children=[b]
        }
    }
    if(children!=='undefined'){
        for(i=0;i<children.length;++i){
            if(!isText(children[i])){
                children[i]=vnode(undefined,undefined,undefined,undefined,children[i],undefined)            }
        }
    }
    return vnode(sel,data,children,text,undefined)
}