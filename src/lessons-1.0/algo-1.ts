
function foo() {
  
  // javascript hashing, hashMap and hashTable

  // hashTable

  const hash = (str: string, max: number) => {
    let hash: number = 0;

    for (let i = 0; i < str.length; i++) {
      hash += str.charCodeAt(i);
    }
    console.log(hash);
    return hash % max;
  }

  console.log(hash('love', 5))

  /* class HashTable {
    private storage: any;

    constructor() {

    }
  } */

  //------------------------

  /* 
  # key => value

  # hash function that maps keys to specific indices in an array.


  
  */

 
  class HashTable<T> {
    private size: number;
    private table: [string, T][];

    constructor(size: number = 10) {
      this.size = size;
      this.table = new Array(size);
    }

    // has function maps keys to array indices 
    private hash(key: string): number {
      let hash = 0;

      for (let i = 0; i < key.length; i++) {
        // charCodeAt =: returns char's uniCode
        // (i + 1) =: because we might have repeated char in and index
        // % this.size =: to keep the hash_value within the bound of the hashTable size
        hash = (hash + key.charCodeAt(i) * (i + 1)) % this.size;
      }
      return hash;
    }

    /* table = [
      [key, value],
      [key, value],
    ] */
    public set(key: string, value: T): void {
      // hash the key to get a specific index for a certain char
      // example: put: t -> and get 0 
      const index = this.hash(key);

      // if array index does not exist =: put [] in the index
      if (!this.table[index]) {
        this.table[index] = [];
      }

      const pairs: Array<[string, T]> = this.table[index];
      
      
      // Update Value: if key already exist
      if (pairs[0] === key) {
        // value = new_value
        pairs[1] = value;
        return;
      }
      
      // add key-value to array
      this.table[index] = [key, value];
    } 

    // get value by key 
    public get(key: string): T | undefined {
      // get the index using the hash function
      const index = this.hash(key);
      const pairs = this.table[index];

      // if: key does not exist
      if (!pairs.length) return undefined;

      if (pairs[0] === key) {
        return pairs[1]
      }

      return undefined;
    }

    public remove(key: string): void {
      const index = this.hash(key);
      const pairs = this.table[index];

      if (!pairs.length) return;

      this.table[index] = [];
    }

    public getTable() {
      return this.table;
    }

  }

  const hashMap1 = new HashTable(10);

  hashMap1.set('user1', {name: 'aku'});
  
  console.log(hashMap1.getTable());

  console.log(hashMap1.get('user1'));

  hashMap1.set('user1', {name: 'sara'});
  console.log(hashMap1.get('user1'));

  hashMap1.set('user2', {name: 'reza'});
  //hashMap1.remove('user2');
  console.log(hashMap1.get('user2'));

}

function algo1() {
  foo();
}

export default algo1