import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { LoginComponent } from '../app/components/login/login.component';
import { ButtonComponent } from '../app/common-components/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StateService } from '../app/services/state.service';
import { HttpService } from '../app/services/http.service';
import { reducer } from '../app/store/reducer'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

export default {
    title: 'Example/login',
    component: LoginComponent,
    decorators: [
        moduleMetadata({
            declarations: [ButtonComponent, LoginComponent],
            imports: [CommonModule, HttpClientModule,ReactiveFormsModule,FormsModule, StoreModule.forRoot({
                loginView: reducer
            })],
            providers: [StateService, HttpService]
        }),
    ],
} as Meta;

const Template: Story<LoginComponent> = (args: LoginComponent) => ({
    component: LoginComponent,
    props: args,
});

export const login = Template.bind({});
login.args = {

}