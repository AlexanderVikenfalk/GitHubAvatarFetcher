import React from 'react';
import {StateMachineProvider, createStore} from 'little-state-machine';
import Routes from './routes/routes';
import Store from './globalState/store';

createStore(Store);

export default function App() {
    return (
        <StateMachineProvider>
            <main>
                <Routes />
            </main>
        </StateMachineProvider>
    );
}
