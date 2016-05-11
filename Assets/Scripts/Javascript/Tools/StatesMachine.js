    var StatesMachine = {
        
        currentState : 'Neutral',
        Case : ['Neutral','Combat','Poursuite','Recherche'],
        playerCollision : false,
        playerRepere : false,
        playerHide : false,
        playerFight : false,
        playerFlee : false,
        playerDead : false,
        playerInWarningZone : false,
        
        setState : function() {
            this.updateAction(this.currentState);
        },
        
        updateAction : function(state){
            if (this.Case.indexOf(state) != -1) {
                switch (state) {
                    case 'Combat':
                        if(this.currentState != 'Recherche'){
                            
                            this.currentState = 'Combat';
                            canvas.style.background = 'red';
                            
                            if(this.playerFlee){
                                this.currentState = 'Poursuite';
                            }  
                            
                            if(this.playerDead){
                                this.currentState = 'Recherche';
                            }
                        }
                        
                        break;
                    case 'Poursuite':
                        if(this.currentState != 'Neutral'){
                            
                            this.currentState = 'Poursuite';
                            canvas.style.background = 'yellow';
                            
                            if(this.playerFight){
                                this.currentState = 'Combat';
                            }
                            
                            if(this.playerFlee){
                                this.currentState = 'Neutral';
                            }
                        }
                        
                        break;
                    case 'Recherche':
                        this.currentState = 'Recherche';
                        canvas.style.background = 'orange';
                        
                        if(this.playerCollision){
                            this.currentState = 'Poursuite';
                        }
                        if(this.playerHide){
                            this.currentState = 'Neutral';
                        }
                        
                        break;
                
                    default:
                        if(this.currentState != 'Poursuite' && this.currentState != 'Combat'){
                            
                            this.currentState = 'Neutral';
                            canvas.style.background = 'lightblue';
                            if(this.playerRepere){
                                this.currentState = 'Recherche';
                            }
                            
                            if(this.playerInWarningZone){
                                this.currentState = 'Combat';
                            }
                        }
                        
                        break;
                }
            }   
        }
        
    }