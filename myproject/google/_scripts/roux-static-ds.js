
 * @extends storeLocator.StaticDataFeed
 * @constructor
 
function RouxDataSource() {
  $.extend(this, new storeLocator.StaticDataFeed);

  var that = this;
  $.get('_assets/roux_stores.csv', function(data) {
    that.setStores(that.parse_(data));
  });
}


 * @const
 * @type {!storeLocator.FeatureSet}
 * @private
 
RouxDataSource.prototype.FEATURES_ = new storeLocator.FeatureSet(
  new storeLocator.Feature('Oils-YES', ''),
  new storeLocator.Feature('Sculpture-YES', '')
);


 * @return {!storeLocator.FeatureSet}
 
RouxDataSource.prototype.getFeatures = function() {
  return this.FEATURES_;
};


 * @private
 * @param {string} csv
 * @return {!Array.<!storeLocator.Store>}
 
RouxDataSource.prototype.parse_ = function(csv) {
  var stores = [];
  var rows = csv.split('\n');
  var headings = this.parseRow_(rows[0]);

  for (var i = 1, row; row = rows[i]; i++) {
    row = this.toObject_(headings, this.parseRow_(row));
    var features = new storeLocator.FeatureSet;
    features.add(this.FEATURES_.getById('Oils-' + row.Oils));
    features.add(this.FEATURES_.getById('Sculpture-' + row.Sculpture));

    var position = new google.maps.LatLng(row.Ycoord, row.Xcoord);

    var shop = this.join_([row.Shopping_center], ', ');
	var city_state = this.join_([row.City, row.State],', ');
    var city_state_zip = this.join_([city_state, row.Postcode], '  ');

    var store = new storeLocator.Store(row.uuid, position, features, {
      title: row.Store_name,
      address: this.join_([shop, row.Street_add, city_state_zip, row.Hrs_of_bus], '<br>'),
    });
    stores.push(store);
  }
  return stores;
};


 * Joins elements of an array that are non-empty and non-null.
 * @private
 * @param {!Array} arr array of elements to join.
 * @param {string} sep the separator.
 * @return {string}
 
RouxDataSource.prototype.join_ = function(arr, sep) {
  var parts = [];
  for (var i = 0, ii = arr.length; i < ii; i++) {
    arr[i] && parts.push(arr[i]);
  }
  return parts.join(sep);
};


 * Very rudimentary CSV parsing - we know how this particular CSV is formatted.
 * IMPORTANT: Don't use this for general CSV parsing!
 * @private
 * @param {string} row
 * @return {Array.<string>}

RouxDataSource.prototype.parseRow_ = function(row) {
  // Strip leading quote.
  if (row.charAt(0) == '"') {
    row = row.substring(1);
  }
  // Strip trailing quote. There seems to be a character between the last quote
  // and the line ending, hence 2 instead of 1.
  if (row.charAt(row.length - 1) == '"') {
    row = row.substring(0, row.length - 1);
  }

  row = row.split('","');

  return row;
};

/**
 * Creates an object mapping headings to row elements.
 * @private
 * @param {Array.<string>} headings
 * @param {Array.<string>} row
 * @return {Object}
 */
RouxDataSource.prototype.toObject_ = function(headings, row) {
  var result = {};
  for (var i = 0, ii = row.length; i < ii; i++) {
    result[headings[i]] = row[i];
  }
  return result;
};
