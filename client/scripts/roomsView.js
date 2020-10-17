var RoomsView = {
  // select button with id addRoom
  $button: $('#addRoom'),
  $select: $('#rooms select'),

  initialize: function() {
    Rooms.readRooms();
  },

  render: function(data) {
    // create a new set to store unique room names
    var uniqueRooms = new Set();
    for (var item of data.results) {
      // check if there is roomname in item and the value of roomname is not empty
      if (item['roomname']) {
        // check if each value is unique
        uniqueRooms.add(item['roomname']);
      }
    }
    // loop in uniqueRooms
    for (var room of uniqueRooms) {
      this.$select.append(this.optionTemplate({roomname: room}));
    }
  },

  // temaplate for each room to add to select dropdown
  optionTemplate: _.template(`
  <option><%=roomname%></option>
`)

};
