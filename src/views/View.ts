import { Model } from "../model/Model";

export abstract class View<T extends Model<K>, K> {
    abstract markup(): string;
    abstract eventBind(): { [key: string]: (e: Event) => void };

    constructor(public parentEl: Element, public data: T) {
        this.data.on("update", () => {
            this.render();
        });
    }

    addEvents() {
        const eventObj = this.eventBind();
        const events = Object.keys(eventObj);

        events.forEach((key: string) => {
            const [event, identifier] = key.split(":");
            this.parentEl.querySelector(identifier)?.addEventListener(event, eventObj[key]);
        });
    }



    render() {
        this.parentEl.innerHTML = "";
        const template = document.createElement("template");
        template.innerHTML = this.markup();
        this.parentEl.appendChild(template.content);
        this.addEvents();

    }
}
