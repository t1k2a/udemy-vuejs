export const tokyoNumber = {
    data() {
        return {
            tmpData: "hello",
            title: "Welcode to Tokyo",
            subTitle: "Tokyo is great city",
            number: 0
        };
    },
    filters: {
        lowerCase(value) {
            return value.toLowerCase();
        }
    },
    created() {
        console.log("created in Mixin");
    }
};