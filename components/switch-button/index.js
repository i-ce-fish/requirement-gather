Component({
    properties: {
        width: {
            type: String,
            value: ''
        }
    },
    data: {
        active: false
    },
    methods: {
        tapButton() {
            this.setData({
                active: !this.data.active
            })
        }
    }
});
