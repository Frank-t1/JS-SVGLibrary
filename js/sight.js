class SVGElement {
    constructor (){
       this.type=type;
       this.namespace='http://www.w3.org/2000/svg';
       this.node=document.createElementNS(namespace,type);
      return this;
    }

    attr(attrs){
        return this;
    }

}