/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Bank, BankInterface } from "../../contracts/Bank";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "res",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506104d3806100206000396000f3fe60806040526004361061005a5760003560e01c80638da5cb5b116100435780638da5cb5b146100a4578063c4d66de8146100fc578063d0e30db01461011c57600080fd5b806312065fe01461005f5780632e1a7d4d1461008f575b600080fd5b34801561006b57600080fd5b50336000908152600160205260409020546040519081526020015b60405180910390f35b6100a261009d3660046103ec565b610124565b005b3480156100b057600080fd5b506000546100d79062010000900473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610086565b34801561010857600080fd5b506100a2610117366004610405565b6101f7565b6100a26103c6565b336000908152600160205260409020548111156101a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e73756666696369656e742062616c616e636521000000000000000000000060448201526064015b60405180910390fd5b33600090815260016020526040812080548392906101c1908490610471565b9091555050604051339082156108fc029083906000818181858888f193505050501580156101f3573d6000803e3d6000fd5b5050565b600054610100900460ff16158080156102175750600054600160ff909116105b806102315750303b158015610231575060005460ff166001145b6102bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610199565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055801561031b57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff85160217905580156101f357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b33600090815260016020526040812080543492906103e590849061048a565b9091555050565b6000602082840312156103fe57600080fd5b5035919050565b60006020828403121561041757600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461043b57600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561048457610484610442565b92915050565b808201808211156104845761048461044256fea2646970667358221220e8fd52fbbb97924246f95dec61186aa787d1766d2e911b9c6f7107404b14ac4364736f6c63430008110033";

type BankConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BankConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Bank__factory extends ContractFactory {
  constructor(...args: BankConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Bank> {
    return super.deploy(overrides || {}) as Promise<Bank>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Bank {
    return super.attach(address) as Bank;
  }
  override connect(signer: Signer): Bank__factory {
    return super.connect(signer) as Bank__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BankInterface {
    return new utils.Interface(_abi) as BankInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Bank {
    return new Contract(address, _abi, signerOrProvider) as Bank;
  }
}
