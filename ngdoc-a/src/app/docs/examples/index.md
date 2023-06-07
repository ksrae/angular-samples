# {{ NgDocPage.title }}

Example page.


### has container
{{ NgDocActions.demo("ButtonDemoComponent") }}


### no container
{{ NgDocActions.demo("ButtonDemoComponent", {container: false}) }}


### demo pane
{{ NgDocActions.demoPane("ButtonDemoComponent") }}


### pane expand
{{ NgDocActions.demoPane("ButtonDemoComponent", {expanded: true, tabs: ["HTML"]}) }}



{{ NgDocActions.demo("CustomButtonDemoComponent") }}
