import Image from "../models/Image";

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://801d2ed04e7c.ngrok.io/uploads/${image.path}`,
        }
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
}