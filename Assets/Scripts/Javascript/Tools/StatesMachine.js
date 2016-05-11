var StatesMachine = {
    
    inCombat : false,
    inNeutral : false,
    inPoursuite : false,
    inRecherche : true,
    Case : ['Neutral','Combat','Poursuite','Recherche'],
    
    setState : function(state = 'Neutral') {
        if (this.Case.indexOf(state) != -1) {
            switch (state) {
                case 'Combat':
                    if(!this.inRecherche){
                        
                        this.inCombat = true;
                        canvas.style.background = 'yellow';
                        this.inNeutral = false;
                        this.inPoursuite = false;
                        this.inRecherche = false;   
                    }
                    
                    break;
                case 'Poursuite':
                    if(!this.inNeutral){
                        
                        this.inPoursuite = true;
                        canvas.style.background = 'red';
                        this.inNeutral = false;
                        this.inCombat = false;
                        this.inRecherche = false;
                    }
                    
                    break;
                case 'Recherche':
                    this.inRecherche = true;
                    canvas.style.background = 'orange';
                    this.inNeutral = false;
                    this.inCombat = false;
                    this.inPoursuite = false;
                    break;
            
                default:
                    if(!this.inPoursuite && !this.inCombat){
                        
                        this.inNeutral = true;
                        canvas.style.background = 'lightblue';
                        this.inRecherche = false;
                        this.inCombat = false;
                        this.inPoursuite = false;
                    }
                    
                    break;
            }
        }   
    }
    
}