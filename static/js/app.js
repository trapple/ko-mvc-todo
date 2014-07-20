$(function () {
  var TodoItem = function (data) {
    var self = this;
    this.text = ko.observable(data.text);
    this.complete = ko.observable(!!data.complete);
    this.toggleComplete = function () {
      this.complete(!this.complete());
    };
  };

  TodoList = function () {
    var self = this;

    self.list = ko.observableArray([
      new TodoItem({text: "item1"}),
      new TodoItem({text: "item2"})
    ]);

    self.add = function (text) {
      self.list.push(
        new TodoItem({text: text})
      );
    };

    self.addFromForm = function (form) {
      var input = $(form).find("input[name=text]");
      if(input.val()){
        self.add(input.val());
        input.val("");
      }
    };

    self.removeItem = function (text) {
      var list = $.grep(self.list(), function (val) {
        if(val.text() != text){
          return val;
        }
      });
      self.list(list);
    };

    self.removeChecked = function () {
      $.each(self.list(),function () {
        if(this.complete()){
          self.removeItem(this.text());
        }
      }); 
    };

    //self.checkedClass = ko.computed(function () {
    //  return self.complete ? "list-group-item-imfo" : "";
    //}, this);

    
  };

  ko.applyBindings(new TodoList());

});
