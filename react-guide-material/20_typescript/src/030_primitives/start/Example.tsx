const Example = () => {
  let str: string = 'hello';
  str = 'bye';

  let num: number = 123;
  num = 456;

  let bool: boolean = true;
  bool = false;

  let arr: number[] = [1, 2, 3];
  arr = [4, 5, 6];

  let obj: { id: number; name: string } = { id: 1, name: 'taro' };
  obj = { id: 2, name: 'hanako' };

  let arrObj: { id: number; name: string }[] = [
    { id: 1, name: 'taro' },
    { id: 2, name: 'hanako' },
  ];
  arrObj = [{ id: 3, name: 'ichigo' }];

  let any: any = 'hello';
  any = 123;
  any = true;
  any = [1, 2, 3];
  any = { id: 1, name: 'taro' };

  let union: string | number = 'hello';
  union = 123;

  let tuple: [string, number] = ['hello', 123];
  tuple = ['bye', 456];

  let enumColor: 'red' | 'green' | 'blue' = 'red';
  enumColor = 'green';

  let enumSize: 'small' | 'medium' | 'large' = 'medium';
  enumSize = 'large';

  let unknown: unknown = 'hello';
  unknown = 123;

  let nullable: string | null = 'hello';
  nullable = null;
};

export default Example;
