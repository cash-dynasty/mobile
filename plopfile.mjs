export default function (plop) {
    plop.setGenerator('component', {
        description: 'Generate a component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name:'
            },
            {
                type: 'list',
                name: 'type',
                message: 'Component type:',
                choices: ['atoms', 'molecules', 'organisms']
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: 'templates/component.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
                templateFile: 'templates/component.test.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
                templateFile: 'templates/component.styles.ts.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{type}}/{{pascalCase name}}/index.ts',
                templateFile: 'templates/index.ts.hbs'
            },
            {
                type: 'modify',
                path: 'src/components/{{type}}/index.ts',
                pattern: /(\/\/ exports)/g,
                template: `$1\nexport { {{pascalCase name}} } from './{{pascalCase name}}'`
            },
        ],
    });
}
