export interface ButtonList {
    id: number;
    name: string;
    layout: number;
}

export interface RadioList {
    id: number;
    name: string;
}

interface ControllerConfig {
    buttonList: ButtonList[];
    radioList: RadioList[];
}

const controllerConfig: ControllerConfig = {
    buttonList: [
        {
            id: 1,
            name: '1x1',
            layout: 1
        },
        {
            id: 2,
            name: '3x3',
            layout: 3
        },
        {
            id: 3,
            name: '5x5',
            layout: 5
        },
        {
            id: 4,
            name: '10x10',
            layout: 10
        }
    ],
    radioList: [
        {
            id: 1,
            name: 'All'
        },
        {
            id: 2,
            name: 'Random'
        }
    ]
};

export default controllerConfig;
export { controllerConfig };
