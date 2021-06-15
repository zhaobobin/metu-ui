import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '../src/styles/index.scss';
import "./fix_info_style.scss";

library.add(fas);

addDecorator(withInfo);
addParameters({ info: { inline: true, header: true } });