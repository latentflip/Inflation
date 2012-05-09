var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

Inflation.Models.Company = (function(_super) {

  __extends(Company, _super);

  Company.name = 'Company';

  function Company() {
    return Company.__super__.constructor.apply(this, arguments);
  }

  Company.prototype.defaults = {
    day_rate: 500,
    time_unchanged: 2,
    monthly_revenue: 10000
  };

  return Company;

})(Backbone.Model);
