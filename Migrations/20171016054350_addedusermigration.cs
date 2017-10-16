using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace AngularWeb.Migrations
{
    public partial class addedusermigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "CreatorId",
                table: "Todo",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Todo_CreatorId",
                table: "Todo",
                column: "CreatorId");

            migrationBuilder.AddForeignKey(
                name: "FK_Todo_Users_CreatorId",
                table: "Todo",
                column: "CreatorId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Todo_Users_CreatorId",
                table: "Todo");

            migrationBuilder.DropIndex(
                name: "IX_Todo_CreatorId",
                table: "Todo");

            migrationBuilder.DropColumn(
                name: "CreatorId",
                table: "Todo");
        }
    }
}
