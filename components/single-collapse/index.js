Component({
    properties: {
        title: {
            type: String,
            value: ''
        }
    },
    data: {
        activeNames: ['1'],
    },
    methods: {
        onChange(event) {
            this.setData({
                activeNames: event.detail,
            });
        },
    }
});
