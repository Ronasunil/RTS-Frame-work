import { User, userProps } from "../model/User";

import { View } from "./View";

export class UserForm extends View<User, userProps> {

    onSubmit(e: Event): void {
        e.preventDefault();
        console.log("Form submitted");
    }

    eventBind(): { [key: string]: (e: Event) => void } {
        return {
            'submit:.user-form': this.onSubmit,
        };
    }

    markup(): string {
        return `<form class="user-form">
                    <h1 class="primary-heading">User: ${this.data.get("name")}</h1>
                    <div class="user-age">
                    </div>
                    <input type="text" />
                    <button type="submit">Submit</button>
                </form>`;
    }

}
