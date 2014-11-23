angular.module('contentFunction', [])
  .controller('contentController', function() {
    this.selected= true;
    this.notSelected = false;
    this.inditerminate = false;
    this.disabledSelected = true;
    
    //Im not so sure I understand the wanted logic but...
    this.show = function show(){
        return this.selected && (!this.notSelected || !this.inditerminate ) ;
    };
    this.popUp = function popUp() {
        var message = "sleceted checkboxes are:";
        if (this.selected){
        message+= "\n  selected";
        }
        if (this.notSelected){
        message+= "\n  not selected";
        }
        if (this.inditerminate){
        message+= "\n  inditerminate";
        }
          if (this.disabledSelected){
        message+= "\n  disabled selected";
        }
        if (this.date){
        message+= "\nSelected Date:";    
        message+= "\n  " +this.date.toString();
        }
        if (this.comboBox){
        message+= "\n Slection Selected from ComboBox:";    
        message+= "\n   " +this.comboBox.toString();
        }
      window.alert(message);
    };
    
  });