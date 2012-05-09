var _base,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

(_base = Inflation.Views).Company || (_base.Company = {});

Inflation.Views.Company.Edit = (function(_super) {

  __extends(Edit, _super);

  Edit.name = 'Edit';

  function Edit() {
    this.render = __bind(this.render, this);
    return Edit.__super__.constructor.apply(this, arguments);
  }

  Edit.prototype.template = JST['templates/company/edit'];

  Edit.prototype.render = function() {
    $(this.el).html(this.template(this.options.model.toJSON()));
    return this;
  };

  return Edit;

})(Backbone.View);
