import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.css']
})
export class SortTableComponent implements OnInit {

  /****pagination */
  p: Number = 1;
  count: Number = 8;


  searchedKeyword:string;

  public dataList:Array<Employee> = [
    {employeeId:101,employeeName:"Adith",employeeAge:24,employeeDob:"2/11/1997"},
    {employeeId:102,employeeName:"Rijin",employeeAge:28,employeeDob:"29/3/1996"},
    {employeeId:103,employeeName:"Kishor",employeeAge:27,employeeDob:"29/11/1995"},
    {employeeId:104,employeeName:"Bivin",employeeAge:27,employeeDob:"29/1/1999"},
    {employeeId:105,employeeName:"Reshma",employeeAge:26,employeeDob:"9/11/1998"},
    {employeeId:106,employeeName:"Abhison",employeeAge:24,employeeDob:"15/10/1997"},
    {employeeId:107,employeeName:"Anusree",employeeAge:24,employeeDob:"9/11/1995"},
    {employeeId:108,employeeName:"Dhanush",employeeAge:27,employeeDob:"2/09/1999"},
    {employeeId:109,employeeName:"Ayana",employeeAge:25,employeeDob:"19/10/1997"},
    {employeeId:110,employeeName:"Aparna",employeeAge:23,employeeDob:"09/01/1997"},
    {employeeId:101,employeeName:"Adith",employeeAge:24,employeeDob:"2/11/1997"},
    {employeeId:102,employeeName:"Rijin",employeeAge:28,employeeDob:"29/3/1996"},
    {employeeId:103,employeeName:"Kishor",employeeAge:27,employeeDob:"29/11/1995"},
    {employeeId:104,employeeName:"Bivin",employeeAge:27,employeeDob:"29/1/1999"},
    {employeeId:105,employeeName:"Reshma",employeeAge:26,employeeDob:"9/11/1998"},
    {employeeId:106,employeeName:"Abhison",employeeAge:24,employeeDob:"15/10/1997"},
    {employeeId:107,employeeName:"Anusree",employeeAge:24,employeeDob:"9/11/1995"},
    {employeeId:108,employeeName:"Dhanush",employeeAge:27,employeeDob:"2/09/1999"},
    {employeeId:109,employeeName:"Ayana",employeeAge:25,employeeDob:"19/10/1997"},
    {employeeId:110,employeeName:"Aparna",employeeAge:23,employeeDob:"09/01/1997"},
    {employeeId:101,employeeName:"Adith",employeeAge:24,employeeDob:"2/11/1997"},
    {employeeId:102,employeeName:"Rijin",employeeAge:28,employeeDob:"29/3/1996"},
    {employeeId:103,employeeName:"Kishor",employeeAge:27,employeeDob:"29/11/1995"},
    {employeeId:104,employeeName:"Bivin",employeeAge:27,employeeDob:"29/1/1999"},
    {employeeId:105,employeeName:"Reshma",employeeAge:26,employeeDob:"9/11/1998"},
    {employeeId:106,employeeName:"Abhison",employeeAge:24,employeeDob:"15/10/1997"},
    {employeeId:107,employeeName:"Anusree",employeeAge:24,employeeDob:"9/11/1995"},
    {employeeId:108,employeeName:"Dhanush",employeeAge:27,employeeDob:"2/09/1999"},
    {employeeId:109,employeeName:"Ayana",employeeAge:25,employeeDob:"19/10/1997"},
    {employeeId:110,employeeName:"Aparna",employeeAge:23,employeeDob:"09/01/1997"},
    {employeeId:101,employeeName:"Adith",employeeAge:24,employeeDob:"2/11/1997"},
    {employeeId:102,employeeName:"Rijin",employeeAge:28,employeeDob:"29/3/1996"},
    {employeeId:103,employeeName:"Kishor",employeeAge:27,employeeDob:"29/11/1995"},
    {employeeId:104,employeeName:"Bivin",employeeAge:27,employeeDob:"29/1/1999"},
    {employeeId:105,employeeName:"Reshma",employeeAge:26,employeeDob:"9/11/1998"},
    {employeeId:106,employeeName:"Abhison",employeeAge:24,employeeDob:"15/10/1997"},
    {employeeId:107,employeeName:"Anusree",employeeAge:24,employeeDob:"9/11/1995"},
    {employeeId:108,employeeName:"Dhanush",employeeAge:27,employeeDob:"2/09/1999"},
    {employeeId:109,employeeName:"varun",employeeAge:25,employeeDob:"19/10/1997"},
    {employeeId:110,employeeName:"Aparna",employeeAge:23,employeeDob:"09/01/1997"},
  ]

  constructor() { }

  

  ngOnInit() {
  }


}


export interface  Employee{
  employeeId:number;
  employeeName:string;
  employeeAge:number;
  employeeDob:string;
}
