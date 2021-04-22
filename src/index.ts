import { NativeModules } from 'react-native';
import { IBOASodium, StateAddress } from 'boa-sodium-base-ts';

interface INativeSodium {
  sodium_version_string(): Promise<string>;
  randombytes_random(): Promise<number>;
  randombytes_uniform(upper_bound: number): Promise<number>;
  randombytes_buf(size: number): Promise<string>;
  randombytes_close(): Promise<number>;
  randombytes_stir(): Promise<number>;
  crypto_secretbox_keygen(): Promise<string>;
  crypto_secretbox_easy(
    message: string,
    nonce: string,
    key: string
  ): Promise<string>;
  crypto_secretbox_open_easy(
    cipher: string,
    nonce: string,
    key: string
  ): Promise<string>;
  crypto_auth_keygen(): Promise<string>;
  crypto_auth(message: string, key: string): Promise<string>;
  crypto_auth_verify(
    tag: string,
    message: string,
    key: string
  ): Promise<number>;
  crypto_box_keypair(): Promise<{ sk: string; pk: string }>;
  crypto_box_easy(
    message: string,
    nonce: string,
    publicKey: string,
    secretKey: string
  ): Promise<string>;
  crypto_box_easy_afternm(
    message: string,
    nonce: string,
    k: string
  ): Promise<string>;
  crypto_box_open_easy(
    cipher: string,
    nonce: string,
    publicKey: string,
    secretKey: string
  ): Promise<string>;
  crypto_box_open_easy_afternm(
    cipher: string,
    nonce: string,
    k: string
  ): Promise<string>;
  crypto_box_beforenm(publicKey: string, secretKey: string): Promise<string>;
  crypto_scalarmult_base(secretKey: string): Promise<string>;
  crypto_scalarmult(secretKey: string, publicKey: string): Promise<string>;
  crypto_box_seal(message: string, publicKey: string): Promise<string>;
  crypto_box_seal_open(
    cipher: string,
    publicKey: string,
    secretKey: string
  ): Promise<string>;
  crypto_sign_detached(msg: string, secretKey: string): Promise<string>;
  crypto_sign_verify_detached(
    sig: string,
    msg: string,
    publicKey: string
  ): Promise<boolean>;
  crypto_sign_keypair(): Promise<{ sk: string; pk: string }>;
  crypto_sign_seed_keypair(seed: string): Promise<{ sk: string; pk: string }>;
  crypto_sign_ed25519_sk_to_seed(secretKey: string): Promise<string>;
  crypto_sign_ed25519_pk_to_curve25519(publicKey: string): Promise<string>;
  crypto_sign_ed25519_sk_to_curve25519(secretKey: string): Promise<string>;
  crypto_sign_ed25519_sk_to_pk(secretKey: string): Promise<string>;
  crypto_pwhash(
    keylen: number,
    password: string,
    salt: string,
    opslimit: number,
    memlimit: number,
    algo: number
  ): Promise<string>;

  crypto_secretbox_KEYBYTES: number;
  crypto_secretbox_NONCEBYTES: number;
  crypto_secretbox_MACBYTES: number;
  crypto_auth_KEYBYTES: number;
  crypto_auth_BYTES: number;
  crypto_box_PUBLICKEYBYTES: number;
  crypto_box_SECRETKEYBYTES: number;
  crypto_box_NONCEBYTES: number;
  crypto_box_MACBYTES: number;
  crypto_box_ZEROBYTES: number;
  crypto_box_SEALBYTES: number;
  crypto_sign_PUBLICKEYBYTES: number;
  crypto_sign_SECRETKEYBYTES: number;
  crypto_sign_SEEDBYTES: number;
  crypto_sign_BYTES: number;
  crypto_pwhash_SALTBYTES: number;
  crypto_pwhash_OPSLIMIT_MODERATE: number;
  crypto_pwhash_OPSLIMIT_MIN: number;
  crypto_pwhash_OPSLIMIT_MAX: number;
  crypto_pwhash_MEMLIMIT_MODERATE: number;
  crypto_pwhash_MEMLIMIT_MIN: number;
  crypto_pwhash_MEMLIMIT_MAX: number;
  crypto_pwhash_ALG_DEFAULT: number;
  crypto_pwhash_ALG_ARGON2I13: number;
  crypto_pwhash_ALG_ARGON2ID13: number;

  crypto_core_ed25519_BYTES: number;
  crypto_core_ed25519_UNIFORMBYTES: number;
  crypto_core_ed25519_SCALARBYTES: number;
  crypto_core_ed25519_NONREDUCEDSCALARBYTES: number;
  crypto_aead_xchacha20poly1305_ietf_KEYBYTES: number;
  crypto_aead_xchacha20poly1305_ietf_NPUBBYTES: number;

  crypto_core_ed25519_random(): Promise<string>;
  crypto_core_ed25519_from_uniform(r: string): Promise<string>;
  crypto_core_ed25519_add(p: string, q: string): Promise<string>;
  crypto_core_ed25519_sub(p: string, q: string): Promise<string>;
  crypto_core_ed25519_is_valid_point(p: string): Promise<number>;
  crypto_core_ed25519_scalar_random(): Promise<string>;
  crypto_core_ed25519_scalar_add(x: string, y: string): Promise<string>;
  crypto_core_ed25519_scalar_sub(x: string, y: string): Promise<string>;
  crypto_core_ed25519_scalar_negate(s: string): Promise<string>;
  crypto_core_ed25519_scalar_complement(s: string): Promise<string>;
  crypto_core_ed25519_scalar_mul(x: string, y: string): Promise<string>;
  crypto_core_ed25519_scalar_invert(s: string): Promise<string>;
  crypto_core_ed25519_scalar_reduce(s: string): Promise<string>;

  crypto_scalarmult_ed25519(n: string, p: string): Promise<string>;
  crypto_scalarmult_ed25519_base(n: string): Promise<string>;
  crypto_scalarmult_ed25519_base_noclamp(n: string): Promise<string>;
  crypto_scalarmult_ed25519_noclamp(n: string, p: string): Promise<string>;

  crypto_generichash(
    hash_length: string,
    message: string,
    key: string
  ): Promise<string>;

  crypto_generichash_init(key: string, hash_length: string): Promise<string>;
  crypto_generichash_update(
    state_address: string,
    message_chunk: string
  ): Promise<void>;
  crypto_generichash_final(
    state_address: string,
    hash_length: string
  ): Promise<string>;

  crypto_aead_chacha20poly1305_ietf_keygen(): Promise<string>;
  crypto_aead_xchacha20poly1305_ietf_encrypt(
    message: string,
    additional_data: string,
    secret_nonce: string,
    public_nonce: string,
    key: string
  ): Promise<string>;

  crypto_aead_xchacha20poly1305_ietf_decrypt(
    secret_nonce: string,
    ciphertext: string,
    additional_data: string,
    public_nonce: string,
    key: string
  ): Promise<string>;
}

const Sodium: INativeSodium = NativeModules.Sodium;
export default Sodium;

export class BOASodiumRN extends IBOASodium {
  public crypto_core_ed25519_BYTES: number = 32;
  public crypto_core_ed25519_UNIFORMBYTES: number = 32;
  public crypto_core_ed25519_SCALARBYTES: number = 32;
  public crypto_core_ed25519_NONREDUCEDSCALARBYTES: number = 64;
  public crypto_aead_xchacha20poly1305_ietf_KEYBYTES: number = 32;
  public crypto_aead_xchacha20poly1305_ietf_NPUBBYTES: number = 24;

  public init(): Promise<void> {
    return new Promise<void>((resolve) => {
      resolve();
    });
  }

  public crypto_core_ed25519_random(): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      Sodium.crypto_core_ed25519_random()
        .then((res: string) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_core_ed25519_from_uniform(r: Uint8Array): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      let in_r = BOASodiumRN.toHexString(r);
      Sodium.crypto_core_ed25519_from_uniform(in_r)
        .then((res: string) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_core_ed25519_add(
    p: Uint8Array,
    q: Uint8Array
  ): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      let in_p = BOASodiumRN.toHexString(p);
      let in_q = BOASodiumRN.toHexString(q);
      Sodium.crypto_core_ed25519_add(in_p, in_q)
        .then((res: string) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_core_ed25519_sub(
    p: Uint8Array,
    q: Uint8Array
  ): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      let in_p = BOASodiumRN.toHexString(p);
      let in_q = BOASodiumRN.toHexString(q);
      Sodium.crypto_core_ed25519_sub(in_p, in_q)
        .then((res: string) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_core_ed25519_is_valid_point(p: Uint8Array): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      let in_p = BOASodiumRN.toHexString(p);
      Sodium.crypto_core_ed25519_is_valid_point(in_p)
        .then((res: number) => {
          resolve(res !== 0);
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_core_ed25519_scalar_random(): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      Sodium.crypto_core_ed25519_scalar_random()
        .then((res: string) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_core_ed25519_scalar_add(
    x: Uint8Array,
    y: Uint8Array
  ): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      let in_x = BOASodiumRN.toHexString(x);
      let in_y = BOASodiumRN.toHexString(y);
      Sodium.crypto_core_ed25519_scalar_add(in_x, in_y)
        .then((res: string) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_core_ed25519_scalar_sub(
    x: Uint8Array,
    y: Uint8Array
  ): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      let in_x = BOASodiumRN.toHexString(x);
      let in_y = BOASodiumRN.toHexString(y);
      Sodium.crypto_core_ed25519_scalar_sub(in_x, in_y)
        .then((res: string) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_core_ed25519_scalar_negate(s: Uint8Array): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      let in_s = BOASodiumRN.toHexString(s);
      Sodium.crypto_core_ed25519_scalar_negate(in_s)
        .then((res: string) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_core_ed25519_scalar_complement(
    s: Uint8Array
  ): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      let in_s = BOASodiumRN.toHexString(s);
      Sodium.crypto_core_ed25519_scalar_complement(in_s)
        .then((res: string) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_core_ed25519_scalar_mul(
    x: Uint8Array,
    y: Uint8Array
  ): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      let in_x = BOASodiumRN.toHexString(x);
      let in_y = BOASodiumRN.toHexString(y);
      Sodium.crypto_core_ed25519_scalar_mul(in_x, in_y)
        .then((res: string) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_core_ed25519_scalar_invert(s: Uint8Array): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      let in_s = BOASodiumRN.toHexString(s);
      Sodium.crypto_core_ed25519_scalar_invert(in_s)
        .then((res: string) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_core_ed25519_scalar_reduce(s: Uint8Array): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      let in_s = BOASodiumRN.toHexString(s);
      Sodium.crypto_core_ed25519_scalar_reduce(in_s)
        .then((res: string) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_scalarmult_ed25519(
    n: Uint8Array,
    p: Uint8Array
  ): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      let in_n = BOASodiumRN.toHexString(n);
      let in_p = BOASodiumRN.toHexString(p);
      Sodium.crypto_scalarmult_ed25519(in_n, in_p)
        .then((res: string) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_scalarmult_ed25519_base(n: Uint8Array): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      let in_n = BOASodiumRN.toHexString(n);
      Sodium.crypto_scalarmult_ed25519_base(in_n)
        .then((res: string) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_scalarmult_ed25519_base_noclamp(
    n: Uint8Array
  ): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      let in_n = BOASodiumRN.toHexString(n);
      Sodium.crypto_scalarmult_ed25519_base_noclamp(in_n)
        .then((res: string) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_scalarmult_ed25519_noclamp(
    n: Uint8Array,
    p: Uint8Array
  ): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      let in_n = BOASodiumRN.toHexString(n);
      let in_p = BOASodiumRN.toHexString(p);
      Sodium.crypto_scalarmult_ed25519_noclamp(in_n, in_p)
        .then((res: string) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public randombytes_buf(n: number): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      Sodium.randombytes_buf(n)
        .then((res: string) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_generichash(
    hash_length: number,
    message: Uint8Array,
    key?: Uint8Array
  ): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      let in_length = hash_length.toString();
      let in_message = BOASodiumRN.toHexString(message);
      let in_key = key !== undefined ? BOASodiumRN.toHexString(key) : '';
      Sodium.crypto_generichash(in_length, in_message, in_key)
        .then((res: string) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }
  /*
  public crypto_generichash_init(
    key: Uint8Array | null,
    hash_length: number
  ): Promise<StateAddress> {
    return new Promise<StateAddress>((resolve, reject) => {
      let in_key = key !== null ? BOASodiumRN.toHexString(key) : '';
      let in_length = hash_length.toString();
      Sodium.crypto_generichash_init(in_key, in_length)
        .then((res: string) => {
          resolve({ name: res });
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_generichash_update(
    state_address: StateAddress,
    message_chunk: Uint8Array
  ): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      let in_message = BOASodiumRN.toHexString(message_chunk);
      Sodium.crypto_generichash_update(state_address.name, in_message)
        .then(() => {
          resolve();
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_generichash_final(
    state_address: StateAddress,
    hash_length: number
  ): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      let in_length = hash_length.toString();
      Sodium.crypto_generichash_final(state_address.name, in_length)
        .then((res: any) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_aead_chacha20poly1305_ietf_keygen(): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      Sodium.crypto_aead_chacha20poly1305_ietf_keygen()
        .then((res: any) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_aead_xchacha20poly1305_ietf_encrypt(
    message: Uint8Array,
    additional_data: Uint8Array | null,
    secret_nonce: Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array
  ): Promise<Uint8Array> {
    let in_message_chunk = BOASodiumRN.toHexString(message);
    let in_additional_data =
      additional_data !== null
        ? BOASodiumRN.toHexString(additional_data)
        : '';
    let in_secret_nonce =
      secret_nonce !== null ? BOASodiumRN.toHexString(secret_nonce) : '';
    let in_public_nonce = BOASodiumRN.toHexString(public_nonce);
    let in_key = BOASodiumRN.toHexString(key);

    return new Promise<Uint8Array>((resolve, reject) => {
      Sodium.crypto_aead_xchacha20poly1305_ietf_encrypt(
        in_message_chunk,
        in_additional_data,
        in_secret_nonce,
        in_public_nonce,
        in_key
      )
        .then((res: any) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  public crypto_aead_xchacha20poly1305_ietf_decrypt(
    secret_nonce: Uint8Array | null,
    ciphertext: Uint8Array,
    additional_data: Uint8Array | null,
    public_nonce: Uint8Array,
    key: Uint8Array
  ): Promise<Uint8Array> {
    let in_secret_nonce =
      secret_nonce !== null ? BOASodiumRN.toHexString(secret_nonce) : 'null';
    let in_ciphertext = BOASodiumRN.toHexString(ciphertext);
    let in_additional_data =
      additional_data !== null
        ? BOASodiumRN.toHexString(additional_data)
        : 'null';
    let in_public_nonce = BOASodiumRN.toHexString(public_nonce);
    let in_key = BOASodiumRN.toHexString(key);

    return new Promise<Uint8Array>((resolve, reject) => {
      Sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(
        in_secret_nonce,
        in_ciphertext,
        in_additional_data,
        in_public_nonce,
        in_key
      )
        .then((res: any) => {
          resolve(BOASodiumRN.toByteArray(res));
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }
*/
  public static toHexString(byteArray: Uint8Array): string {
    let res: Array<string> = [];
    byteArray.forEach((m) =>
      res.push(('0' + (m & 0xff).toString(16)).slice(-2))
    );
    return res.join('');
  }

  public static toByteArray(hexString: string): Uint8Array {
    let result = [];
    for (let i = 0; i < hexString.length; i += 2) {
      result.push(parseInt(hexString.substr(i, 2), 16));
    }
    return new Uint8Array(result);
  }
}
