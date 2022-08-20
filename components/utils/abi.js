import { ethers } from "ethers"

export const KNOWHERE = ""
export const ABI = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "string",
                name: "seed",
                type: "string",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "name",
                type: "bytes32",
            },
        ],
        name: "Create",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "name",
                type: "bytes32",
            },
        ],
        name: "Delete",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "name",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "string",
                name: "cid",
                type: "string",
            },
        ],
        name: "Update",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "seed",
                type: "string",
            },
        ],
        name: "create",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "name",
                type: "bytes32",
            },
        ],
        name: "getAccess",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "name",
                type: "bytes32",
            },
        ],
        name: "read",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "name",
                type: "bytes32",
            },
        ],
        name: "remove",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "name",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "accessor",
                type: "address",
            },
        ],
        name: "setPermission",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "name",
                type: "bytes32",
            },
            {
                internalType: "string",
                name: "cid",
                type: "string",
            },
        ],
        name: "update",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "name",
                type: "bytes32",
            },
            {
                internalType: "string",
                name: "cid",
                type: "string",
            },
        ],
        name: "updateWithContract",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
]
export const provider = ethers.getDefaultProvider("http://localhost:8545")
