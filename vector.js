var Vector = (function () {
  
const TO_DEGREES = 180 / Math.PI;
const TO_RADIANS = Math.PI / 180;

function Vector(x, y) {
  this.x = x;
  this.y = y;
  
  this.magnatude = this.mag();
};

Vector.prototype = {
  toString: function (dp) {
    dp = dp || 3;
		return "[" + this.x.toFixed(dp) + ", " + this.y.toFixed(dp) + ":" + this.mag().toFixed(dp) + "]";
  },
  set: function (x, y) {
    this.x = x;
    this.y = y;
  },
  clone: function () {
    return new Vector(this.x, this.y);
  },
  mag: function () {
    return Math.sqrt((this.x*this.x) + (this.y*this.y));
  },
  magSquared: function () {
		return (this.x*this.x) + (this.y*this.y);
  },
  add: function (v) {
    this.x += v.x;
    this.y += v.y;
  },
  sub: function (v) {
    this.x -= v.x;
    this.y -= v.y;
  },
  mult: function (n) {
    this.x *= n;
		this.y *= n;
		return this;
  },
  div: function (n) {
    this.x /= n;
		this.y /= n;
  },
  dist: function () {},
  dot: function (v) {
    return (this.x * v.x) + (this.y * v.y);
  },
  copy: function (v) {
    this.x = v.x;
    this.y = v.y;
  },
  angle: function(inDegrees) {
		return (inDegrees) ? 
			Math.atan2(this.y,this.x) * TO_DEGREES :
			Math.atan2(this.y,this.x);
	},
	angleTo: function(vect, inDegrees) {
		var a = Math.atan2(vect.y - this.y, vect.x - this.x);
		if(inDegrees) {
			if(a < 0)
				a = (a + Math.PI) + Math.PI;
				return a * TO_DEGREES;
		}
		return a;
	},
	distanceTo: function(vect) {
		return Math.sqrt(Math.pow(vect.x - this.x, 2) + Math.pow(vect.y - this.y, 2));
	},
  rotate: function (angle) {
    var cosRY = Math.cos(angle * TO_RADIANS);
		var sinRY = Math.sin(angle * TO_RADIANS);
		var temp = new Vector();
		temp.copy(this); 

		this.x = (temp.x * cosRY) - (temp.y * sinRY);
		this.y = (temp.x * sinRY) + (temp.y * cosRY);
  },
  rotateAroundPoint: function (point, angle) {
    var temp = new Vector();
		temp.copy(this);
		temp.sub(point);
		temp.rotate(angle);
		temp.add(point);
		this.copy(temp);
	},
	cross: function () {},
  normalise: function () {
    var m = this.mag();
		this.x = this.x/m;
		this.y = this.y/m;

		return this;
  },
  limit: function () {},
  angleBetween: function () {}
};

try {
	exports.Vector = Vector;
} catch(e) {};

return Vector;

})();
