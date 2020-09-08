import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CardComponent } from '../app/components/card/card.component';
// import { CustomElement } from '../app/lit-elements/cutom-button-elements';
import { ButtonComponent } from '../app/common-components/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StateService } from '../app/services/state.service';
import { HttpService } from '../app/services/http.service';
import { reducer } from '../app/store/reducer'

export default {
    title: 'Example/card',
    component: CardComponent,
    decorators: [
        moduleMetadata({
            declarations: [ButtonComponent, CardComponent],
            imports: [CommonModule, HttpClientModule, StoreModule.forRoot({
                loginView: reducer
            })],
            providers: [StateService, HttpService]
        }),
    ],
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
    component: CardComponent,
    props: args,
});

export const card = Template.bind({});
card.args = {
    product: {
        "id": "1",
        "heading": "Apple Imac",
        "description": "A1312 Core i7",
        "imageUrl": "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "uploader-id": "1"
    }
}